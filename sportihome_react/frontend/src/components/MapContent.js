import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import SpotInfoCard from "./SpotInfoCard";
import SpotMarkers from "./SpotMarkers";

const MapContent = ({
  viewport,
  setState,
  state,
  userLocation,
  selectSpot,
  spotsInfos,
}) => {
  const closePopup = () => {
    setState({
      ...state,
      selectSpot: null,
    });
  };

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      onViewportChange={(viewport) => setState({ ...state, viewport })}
      mapboxApiAccessToken="pk.eyJ1IjoiYm9iYnlzZTdlbiIsImEiOiJja21qcWVvZXIwdGl6MnduYWUxMHkwMHoxIn0.sV_RJrMX8MC5cuREJC1e4Q"
    >
      {Object.keys(userLocation).length !== 0 ? (
        <Marker latitude={userLocation.lat} longitude={userLocation.long}>
          <img
            src="https://img.icons8.com/office/40/000000/marker.png"
            alt="my location"
            className="locaition-icon"
          />
        </Marker>
      ) : null}
      <SpotMarkers spotsInfos={spotsInfos} state={state} setState={setState} />
      {selectSpot && selectSpot.loc && selectSpot.loc.coordinates ? (
        <SpotInfoCard             name={selectSpot.name}
        hobby={selectSpot.hobby}
        about={selectSpot.about}
        id={selectSpot._id}>
        <Popup
          longitude={parseFloat(selectSpot.loc.coordinates[0])}
          latitude={parseFloat(selectSpot.loc.coordinates[1])}
          // onClose={closePopup}
        >
          {/* <SpotInfoCard
            name={selectSpot.name}
            hobby={selectSpot.hobby}
            about={selectSpot.about}
            id={selectSpot._id}
          /> */}
        </Popup>
        </SpotInfoCard>
      ) : null}
    </ReactMapGL>
  );
};

export default MapContent;
