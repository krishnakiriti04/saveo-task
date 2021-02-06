import GoogleMapReact from "google-map-react";
import Marker from "./Marker"

function Map({center,zoom,cordinates, show}) {
    return (
        <div className="map__div">
            <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBNWzgAATQBc03e3Zwg5tjqcqxXCG6ee_c' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {
              show && cordinates.map(val=>{
                  return (
                    <Marker lat={val.lat} lng={val.lng} key={val.lat}/>
                  )
              })
          }
        </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center:{
        lat:20.5937,
        lng:78.9629
    },
    zoom:4
}

export default Map
