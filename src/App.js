import React from "react";
import MapContainer from "./MapContainer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -33.43778,
      lng: -70.65028
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
}

export default App;