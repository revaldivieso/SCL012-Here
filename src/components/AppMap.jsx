import React from "react";
import MapContainer from "./MapContainer";
import Routing from "./Routing";
import "../App.css";

class AppMap extends React.Component {
  mapRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      center: {
      lat: -33.43778,
      lng: -70.65028,
      startingPoint: null,
      endingPoint: null
      }
    };
  }
  setStartingPoint(point0) {
    this.setState({
      startingPoint: point0
    });
  }

  setEndingPoint(point1) {
    this.setState({
      endingPoint: point1
    });
  }

  calculateRoute(point0, point1) {
    console.log("startingPoint", this.state.startingPoint);
    console.log("endingPoint", this.state.endingPoint);
    const H = window.H; // Para que funcione en React hay que ponerle window a todos los "H"
    // Pasas tu Key
    const platform = new H.service.Platform({
      apikey: "YatXWn5RsvdkGIog8fwYN5DEC_DTzFVTt518X6YJ5sI"
    });
    const map = this.state.map;
    point0 = this.state.startingPoint;
    point1 = this.state.endingPoint;
    console.log("point1", point0);
    console.log("point2", point1);
    // Routing
    var routingParameters = {
      // The routing mode:
      mode: "fastest;publicTransport",
      // The start point of the route:
      waypoint0: `geo!${point0}`,
      // The end point of the route:
      waypoint1: `geo!${point1}`,
      // To retrieve the shape of the route we choose the route
      // representation mode 'display'
      representation: "display"
    };
  }
  render() {
    const center = [this.state.lat, this.state.lng];
    const zoom = 50;
    return <MapContainer center={center} zoom={zoom} />;
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.onSuccessPosition.bind(this));
  }

  onSuccessPosition(pos) {
    const crd = pos.coords;
    this.setState({ ...this.state, lat: crd.latitude, lng: crd.longitude });
  }
  const behavior = new H.mapevents.Behavior(new
     H.mapevents.MapEvents(map));

  // Create the default UI components to allow the user to interact with them
  // This variable is unused
  //const ui = H.ui.UI.createDefault(map, defaultLayers);

  // Guarda el mapa en el estado
  this.setState({ map });
  console.log("Mapa en el estado", map);
 }
componentWillUnmount() {
  this.state.map.dispose();
 }
 render() {
  return (
    <div>
      <Routing
        setStartingPoint={this.setStartingPoint.bind(this)}
        setEndingPoint={this.setEndingPoint.bind(this)}
        calculateRoute={this.calculateRoute.bind(this)}
      />
      <div ref={this.mapRef} style={{ height: "1000px" }} />;
    </div>
  );
 }
}

export default AppMap;
