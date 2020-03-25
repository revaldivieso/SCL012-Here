import React from "react";
//import * as Leaflet from "leaflet";
import { Map, TileLayer, Marker, Polygon } from "react-leaflet";

const hereCredentials = {
  id: "4urefBTdX83MUJzvP0jV",
  code: "YatXWn5RsvdkGIog8fwYN5DEC_DTzFVTt518X6YJ5sI"
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const hereTileUrl = `https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/reduced.day/{z}/{x}/{y}/512/png8?apiKey=YatXWn5RsvdkGIog8fwYN5DEC_DTzFVTt518X6YJ5sI &api:320`;
    return (
      <Map
        zoomControl={true}
        attributionControl={true}
        center={this.props.center}
        zoom={this.props.zoom}
      >
        <TileLayer attribution="&copy; Here 2019" url={hereTileUrl} />
        <Marker draggable={true} position={this.props.center} />
        <Polygon
          positions={[
            { lat: -33.5074127, lng: -70.6187289 },
            { lat: -33.4520023, lng: -70.5864565 },
            { lat: -33.4353451, lng: -70.6785679 }
          ]}
        />
      </Map>
    );
  }
}

export default MapContainer;
