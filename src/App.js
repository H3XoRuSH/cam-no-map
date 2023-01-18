import './App.css';
import Map, {Marker} from 'react-map-gl';
import React, { useState } from 'react';
import Sidenav from './Components/Sidenav';
import { locations } from "./lib/navData";

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaDN4b3J1c2giLCJhIjoiY2w4MmxqZDRlMDZ3NTN2bXhtZWwyeHlzbCJ9.hq4G-I8Nl8qOJc6jOC8gHA';

function App() {
  const [myState, setMyState] = useState({
    center_long: 122.94582373167115,
    center_lat: 14.12175226941637,
    mark: [0, 0, 0, 0]
  })
  
  const toggle = (idx) => {
    setMyState(curState => {
      const newMark = [...curState.mark]
      newMark[idx] = !newMark[idx]
      return {
        ...curState,
        mark: newMark
      }
    })
  }

  return (
    <div position="relative">
      <Map
      initialViewState={{
        latitude: 14.12175226941637,
        longitude: 122.94582373167115,
        zoom: 14
      }} 
      style={{position: 'absolute'}}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {
       myState.mark[0] && 
       locations[0].map(item => {
        return <Marker longitude={item.long} latitude={item.lat} color="#C23B23"/>
       })
      }
      {
       myState.mark[1] && 
       locations[1].map(item => {
        return <Marker longitude={item.long} latitude={item.lat} color="#03C03C"/>
       })
      }
      {
       myState.mark[2] && 
       locations[2].map(item => {
        return <Marker longitude={item.long} latitude={item.lat} color="#579ABE"/>
       })
      }
      {
       myState.mark[3] && 
       locations[3].map(item => {
        return <Marker longitude={item.long} latitude={item.lat} color="#976ED7"/>
       })
      }
      
    </Map>
    <Sidenav toggle={toggle} />
    </div>
  );
}


export default App;
