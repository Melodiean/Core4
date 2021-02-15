import React, { useState } from "react";

const Locate = () => {
  const initials = {
    latitude: null,
    longitude: null,
    errMsg: "",
  };

  const [info, setInfo] = useState(initials);

  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      setInfo({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    },
    (err) => setInfo({ errMsg: err.message })
  );

  if (info.errMsg && !info.latitude && !info.longitude) {
    return (
      <div>
        {info.errMsg}
      </div>
    );
  }

  if (!info.errMsg && info.latitude && info.longitude) {
    return (
      <div className="Lheader">
        <p>Latitude: {info.latitude}</p>
        <p>Longitude: {info.longitude}</p>
      </div>
    );
  }

  return <div>Loading...</div>;

};

export default Locate;
