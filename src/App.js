import './App.css';
import Map, {Marker} from 'react-map-gl';
import React, { useState } from 'react';
import Sidenav from './Components/Sidenav';
import { locations } from "./lib/navData";
import Recobox from "./Components/Recobox"
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaDN4b3J1c2giLCJhIjoiY2w4MmxqZDRlMDZ3NTN2bXhtZWwyeHlzbCJ9.hq4G-I8Nl8qOJc6jOC8gHA';

function App() {
  const [myState, setMyState] = useState({
    center_long: 122.94582373167115,
    center_lat: 14.12175226941637,
    mark: [0, 0, 0, 0, 0]
  })

  const [myCenter, setMyCenter] = useState({
    latitude: 14.12175226941637,
    longitude: 122.94582373167115,
    zoom: 14
  })

  const [myCursor, setMyCursor] = useState('auto')
  
  const [myMove, setMyMove] = useState(true)
  const [myTour, setMyTour] = useState([])

  const [recoActive, setRecoActive] = useState(false);
  function changeRecoActive () {
    setRecoActive(!recoActive);
  }

  const setTour = (current) => {
    setMyTour(current)
  } 

  const changeCursor = (open) => {
    if (!open) {
      setMyCursor('crosshair')
    }
    else {
      setMyCursor('auto')
    }
  }
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
  const recenter = () => {
    setMyMove(false)   
    setMyCenter(() => {
      return {
        latitude: 14.12175226941637,
        longitude: 122.94582373167115,
        zoom: 14
      }
    })
    setMyMove(true) 
  }

  function openInNewTab(url) {
    window.open(url, '_blank').focus();
  }

  function dist(lat1, lon1, lat2, lon2) {
      var R = 6371000; // meters
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      lat1 = toRad(lat1);
      lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d.toFixed(2);
    }
  
  function toRad(Value) {
      return Value * Math.PI / 180;
  }

  function getColor(val) {
    if (val === 0) {
      return "#C23B23";
    }
    else if (val === 1) {
      return "#03C03C";
    }
    else if (val === 2) {
      return "#579ABE";
    }
    else if (val === 3) {
      return "#976ED7";
    }
    return "#FFFFFF";
  }

  const click = [];

  return (
    <div position="relative">
      <Map
      {...myCenter}
      onMove={evt => {
        if (myMove) setMyCenter(evt.myCenter)
      }}
      cursor={myCursor}
      style={{position: 'absolute'}}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={MAPBOX_TOKEN}
      maxBounds={[[122.88442984186148, 14.069630830595269], [123.00749755138419, 14.150878204011192]]}
    >
      {
       myState.mark[0] && 
       locations[0].map(item => {
        return <Marker longitude={item.long} latitude={item.lat} color={getColor(0)} onClick={
          myState.mark[4] ? () => {
            click.push([0, item.lat, item.long, item.name])
            if (click.length === 2) {
              const distance = dist(click[0][1], click[0][2], click[1][1], click[1][2])
              alert("The distance from " + click[0][3] + " to " + click[1][3] + " is " + distance + " meters.");
              click.pop()
              click.pop()
              console.log("test")
            }
          } : () => {
            let txt = "Do you want to visit " + item.name + " in Google Maps?";
            if (item.link.slice(-1) !== '/') {
              item.link += '/';
            }

            if (window.confirm(txt) === true) {
              openInNewTab(item.link + item.data);
            }
        }}/>
       })
      }
      {
       myState.mark[1] && 
       locations[1].map(item => {
        return <Marker longitude={item.long} latitude={item.lat} color={getColor(1)} onClick={
          myState.mark[4] ? () => {
            click.push([1, item.lat, item.long, item.name])
            if (click.length === 2) {
              const distance = dist(click[0][1], click[0][2], click[1][1], click[1][2])
              alert("The distance from " + click[0][3] + " to " + click[1][3] + " is " + distance + " meters.");
              click.pop()
              click.pop()
              console.log("test")
            }
          } : () => {
            let txt = "Do you want to visit " + item.name + " in Google Maps?";
            if (item.link.slice(-1) !== '/') {
              item.link += '/';
            }

            if (window.confirm(txt) === true) {
              openInNewTab(item.link + item.data);
            }
        }}/>
       })
      }
      {
       myState.mark[2] && 
       locations[2].map(item => {
        return <Marker longitude={item.long} latitude={item.lat} color={getColor(2)} onClick={
          myState.mark[4] ? () => {
            click.push([2, item.lat, item.long, item.name])
            if (click.length === 2) {
              const distance = dist(click[0][1], click[0][2], click[1][1], click[1][2])
              alert("The distance from " + click[0][3] + " to " + click[1][3] + " is " + distance + " meters.");
              click.pop()
              click.pop()
              console.log("test")
            }
          } : () => {
            let txt = "Do you want to visit " + item.name + " in Google Maps?";
            if (item.link.slice(-1) !== '/') {
              item.link += '/';
            }

            if (window.confirm(txt) === true) {
              openInNewTab(item.link + item.data);
            }
        }}/>
       })
      }
      {
       myState.mark[3] && 
       locations[3].map(item => {
        return <Marker longitude={item.long} latitude={item.lat} color={getColor(3)} onClick={
          myState.mark[4] ? () => {
            click.push([3, item.lat, item.long, item.name])
            if (click.length === 2) {
              const distance = dist(click[0][1], click[0][2], click[1][1], click[1][2])
              alert("The distance from " + click[0][3] + " to " + click[1][3] + " is " + distance + " meters.");
              click.pop()
              click.pop()
              console.log("test")
            }
          } : () => {
            let txt = "Do you want to visit " + item.name + " in Google Maps?";
            if (item.link.slice(-1) !== '/') {
              item.link += '/';
            }

            if (window.confirm(txt) === true) {
              openInNewTab(item.link + item.data);
            }
        }}/>
       })
      }
      {
        myTour.length > 0 &&
        [].concat(...myTour).map((item, index) => {
          if (index === 0) {
            return <Marker longitude={item.long} latitude={item.lat} color={getColor(0)}/>
          }
          else {
            const colorIdx = [1, 3, 2];
            return <Marker longitude={item.long} latitude={item.lat} color={getColor(colorIdx[(index - 1) % 3])}/>
          }
          
        })
      } 
    </Map>
    <Sidenav toggle={toggle} recenter={recenter} changeCursor={changeCursor} setTour={setTour}/>
    <Recobox currentTour={myTour} isActive={recoActive} toggleRecobox={changeRecoActive}/>
    </div>
  );
}


export default App;