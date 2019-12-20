import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

// const { APP_GOOGLE_KEY } = process.env;

const APP_GOOGLE_KEY = "AIzaSyB36n0oFDpwf3yoIGBDrFYN60SvKsIQiGI";

export default function LocalMap({ propertyData = {} }) {
  const { name = "Pletora Construction", address } = propertyData;
  const [center, setMapCenter] = useState({
    lat: 6.441943,
    lng: 3.412209
  });

  useEffect(() => {
    async function setupMap() {
      const log = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}
        &key=${APP_GOOGLE_KEY}`;

      const response = await axios.get(log);
      if (response.data.results[0]) {
        const center = response.data.results[0].geometry.location;
        setMapCenter(center);
      }
    }

    if (propertyData.id) {
      setupMap();
    }
  }, []);

  const Map = () => {
    const [selectedPlace, setSlectedPlace] = useState([]);
    const [showInfoWindow, setShowInfoWindowState] = useState(false);

    const setSlectedPropertyPlace = cord => {
      if (!cord) {
        setShowInfoWindowState(false);
        setSlectedPlace("");
        return;
      }

      setSlectedPlace(cord);
      setShowInfoWindowState(true);
    };

    return (
      <GoogleMap defaultCenter={center} defaultZoom={18}>
        <Marker
          position={center}
          onClick={() => setSlectedPropertyPlace(center)}
        />
        {showInfoWindow && (
          <InfoWindow
            position={selectedPlace}
            onCloseClick={() => setSlectedPropertyPlace(false)}
          >
            {name && (
              <div>
                <strong>{name}</strong>
              </div>
            )}
          </InfoWindow>
        )}
      </GoogleMap>
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(() => <Map />));

  return (
    <WrappedMap
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${APP_GOOGLE_KEY}`}
      loadingElement={<div style={{ height: "100%" }} />}
      containerElement={<div style={{ height: "100%" }} />}
      mapElement={<div style={{ height: "100%" }} />}
    />
  );
}
