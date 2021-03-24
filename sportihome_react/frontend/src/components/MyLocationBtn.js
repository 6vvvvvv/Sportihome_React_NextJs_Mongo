import React from "react";

const MyLocationBtn = ({ userLocation, setState, state }) => {


  const setUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let setUserLocation = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };
      let newViewport = {
        height: "100vh",
        width: "100vw",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 10,
      };
      setState({
        ...state,
        viewport: newViewport,
        userLocation: setUserLocation,
      });
    });
  };
  return (
    <React.Fragment>
      <button onClick={setUserLocation}>My Location</button>
      {userLocation ? (
        <p>
          lat:{userLocation.lat},lng:{userLocation.long}
        </p>
      ) : null}
    </React.Fragment>
  );
};

export default MyLocationBtn;
