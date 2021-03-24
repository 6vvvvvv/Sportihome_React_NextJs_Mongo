import React, { useEffect, useState } from "react";
import axios from "axios";
import { sportiHomeBound, sportList } from "../configs/mapConfig.js";
import MapContent from "./MapContent";
import MapHeader from "./MapHeader";

const Map = () => {
  const [state, setState] = useState({
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 48.86,
      longitude: 2.349,
      zoom: 12,
    },
    spotsInfos: [],
    userLocation: {},
    selectSpot: null,
    dbSpots: [],
    dbFavs: [],
  });

  const { viewport, spotsInfos, userLocation, selectSpot } = state;

  useEffect(() => {
    console.log("spotsInfos", spotsInfos);
  }, [spotsInfos]);

  // fetch spots info by default
  useEffect(() => {
    const fetchLatandLng = async () => {
      try {
        //create sport favorite list
        axios
          .post("http://localhost:3000/api/fav/create", {
            sportList: sportList,
          })
          .then((res) => console.log("save fav success:"))
          .catch((err) => console.log("save fav fail", err));

        //check if spots infos exists in local database
        //if exist then restore to front instead of creation
        const backupDbData = await axios.get(
          "http://localhost:3000/api/spots/queryall"
        );
        console.log("backupDbData", backupDbData.data.data);

        if (!backupDbData.data.data.length) {
          const res = await axios.post(
            `https://sportihome.com/api/spots/getAllMarkersInBounds/${sportiHomeBound.southWest}/${sportiHomeBound.northEast}`,
            {
              sportList,
            }
          );

          const result = res.data;

          if (result) {
            axios
              .post("http://localhost:3000/api/spots/create", {
                result: result,
              })
              .then((res) => console.log("save spots success:"))
              .catch((err) => console.log("save spots fail", err));

            console.log("spots data not exist then create", result);

            //add choosefav filed to each element in fetch result
            //which will look like [...,{...obj,choosefav:false}]
            const resultWtihAddChooseFav = result.map((e) => {
              e.choosefav = false;
              return e;
            });

            setState({ ...state, spotsInfos: resultWtihAddChooseFav });
          }
        } else {
          // if spot data exits then restore from db
          setState({ ...state, spotsInfos: backupDbData.data.data });
        }
      } catch (err) {
        console.log("err", err);
      }
    };

    //execute fetch
    fetchLatandLng();
  }, []);

  return (
    <React.Fragment>
      <MapHeader
        userLocation={userLocation}
        setState={setState}
        state={state}
      />
      <div className="map">
        <MapContent
          viewport={viewport}
          setState={setState}
          state={state}
          userLocation={userLocation}
          selectSpot={selectSpot}
          spotsInfos={spotsInfos}
        />
      </div>
    </React.Fragment>
  );
};

export default Map;
