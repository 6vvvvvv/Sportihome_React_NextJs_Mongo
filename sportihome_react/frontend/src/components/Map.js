import React, { useEffect, useState } from "react";
import axios from "axios";
import { sportiHomeBound, sportList } from "../configs/mapConfig.js";
import MyLocationBtn from "./MyLocationBtn";
import MapContent from "./MapContent";

const Map = () => {
  const [state, setState] = useState({
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 42.430472,
      longitude: -123.334102,
      zoom: 16,
    },
    spotsInfos: [],
    userLocation: {},
    selectSpot: null,
  });

  const { viewport, spotsInfos, userLocation, selectSpot } = state;

  // fetch user location by default
  useEffect(() => {
    const fetchLatandLng = async () => {
      try {
        const res = await axios.post(
          `https://sportihome.com/api/spots/getAllMarkersInBounds/${sportiHomeBound.southWest}/${sportiHomeBound.northEast}`,
          {
            sportList,
          }
        );

        const result = res.data;

        if (result) {
          setState({ ...state, spotsInfos: result });
        }
      } catch (err) {
        console.log("err", err);
      }
    };

    fetchLatandLng();
  }, []);

  return (
    <React.Fragment>
      <MyLocationBtn
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
