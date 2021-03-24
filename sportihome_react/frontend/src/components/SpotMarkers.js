import React from "react";
import { Marker } from "react-map-gl";

const SpotMarkers = ({ spotsInfos, state, setState }) => {

  const setSelectSpot = (placeObj) => {
    setState({
      ...state,
      selectSpot: placeObj,
    });
  };

  return spotsInfos.map((spot) => {
    return (
      <Marker
        key={spot._id}
        longitude={parseFloat(spot.loc.coordinates[0])}
        latitude={parseFloat(spot.loc.coordinates[1])}
      >
        <img
          src="https://img.icons8.com/ultraviolet/40/000000/marker.png"
          alt="spot"
          onClick={() => setSelectSpot(spot)}
        />
      </Marker>
    );
  });
};

export default SpotMarkers;
