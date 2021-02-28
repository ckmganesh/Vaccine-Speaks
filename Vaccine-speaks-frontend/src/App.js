import logo from './logo.svg';
import React, { useEffect, useState, Component } from "react";
import './App.css';
import ReactMapGL, {Marker, Popup} from "react-map-gl"
import * as sentData from "./data/user.json"
import { RiCheckboxBlankCircleLine } from 'react-icons/fa';
function App() {

  const [viewport, setViewport] = useState({
    latitude: 28.644800,
    longitude: 77.216721,
    width: '100vw',
    height: "100vh",
    zoom: 4
  });

  const [selectedPark, setSelectedPark] = useState(null);
  return <div>
    <ReactMapGL {...viewport} mapboxApiAccessToken="pk.eyJ1Ijoic2lkZGhhcnRoMDciLCJhIjoiY2tsb3E4cTZ2MGRzbTJ2cGhkd2Q3MHI5MSJ9.O5f7ajIyhJokof7n9yuHUA"
    mapStyle = "mapbox://styles/siddharth07/cklp3rouk5vl717nnowpu8hdh"
    onViewportChange={viewport => {
      setViewport(viewport);
    }}
    >
    {sentData.features.map((place) => (

(place.Sentiment == "NEGATIVE")?(
<Marker key={place.Id} latitude={place.Latitude}
longitude={place.Longitude}
>

  <i className="fa fa-circle negative " aria-hidden="true" onClick={e =>{
      e.preventDefault();
      setSelectedPark(place);
    }} />
  
  
</Marker>
) : (place.Sentiment == "POSITIVE")? (

  <Marker key={place.Id} latitude={place.Latitude}
longitude={place.Longitude}
>

  <i className="fa fa-circle positive " aria-hidden="true" onClick={e =>{
      e.preventDefault();
      setSelectedPark(place);
    }}  />
  

</Marker>

) : (place.Sentiment == "NEUTRAL")? (

  <Marker key={place.Id} latitude={place.Latitude}
  longitude={place.Longitude}
  >
  
    <i className="fa fa-circle neutral " aria-hidden="true" onClick={e =>{
      e.preventDefault();
      setSelectedPark(place);
    }} />
    
  
  </Marker>

) : (

  <Marker key={place.Id} latitude={place.Latitude}
  longitude={place.Longitude}
  >
  
    <i className="fa fa-circle mixed " aria-hidden="true" onClick={e =>{
      e.preventDefault();
      setSelectedPark(place);
    }}  />
    
  
  </Marker>
)
      

    ))}
    {selectedPark ? (
      <Popup latitude={selectedPark.Latitude} longitude={selectedPark.Longitude} onClose={() => {
        setSelectedPark(null);
      }}>
        <div>
          <h3>Number of Responses: {selectedPark.Count}</h3>
          <h3>Positive Percentage {selectedPark.Positive}</h3>
          <h3>Negative Percentage {selectedPark.Negative}</h3>

        </div>
      </Popup>
    ) : null }
    </ReactMapGL>

  </div>;
}

export default App;

