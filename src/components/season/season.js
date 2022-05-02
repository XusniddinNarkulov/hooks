import React, { useState, useEffect } from "react";
import DisplaySeason from "./displaySeason.js";

const Season = () => {
   const [lat, setLat] = useState();
   const [errorMessage, setErrorMessage] = useState();

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(
         (e) => {
            console.log(e.coords);
            // this.setState({ lat: e.coords.latitude });
            setLat(e.coords.latitude);
         },
         (err) => {
            // this.setState({ errorMessage: err.message });
            setErrorMessage(err.message);
         }
      );
   });

   const getLocation = () => {
      if (lat && !errorMessage) {
         return <div>Latitude:{lat}</div>;
      }
      if (!lat && errorMessage) {
         return <div>Latitude:{errorMessage}</div>;
      } else {
         return <div>Loading...</div>;
      }
   };

   return <DisplaySeason lat={lat} error={errorMessage} />;
};

export default Season;

// class App extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = { lat: null, long: null, errorMessage: "" };
//    }

//    componentDidMount() {
//       navigator.geolocation.getCurrentPosition(
//          (e) => {
//             console.log(e.coords);
//             this.setState({ lat: e.coords.latitude });
//          },
//          (err) => {
//             this.setState({ errorMessage: err.message });
//          }
//       );
//    }

//    componentDidUpdate() {
//       console.log(this.state.lat);
//    }
//    getLocation() {
//       if (this.state.lat && !this.state.errorMessage) {
//          return <div>Latitude:{this.state.lat}</div>;
//       }
//       if (!this.state.lat && this.state.errorMessage) {
//          return <div>Latitude:{this.state.errorMessage}</div>;
//       } else {
//          return <div>Loading...</div>;
//       }
//    }
//    render() {
//       return (
//          <DisplaySeason lat={this.state.lat} error={this.state.errorMessage} />
//       );
//    }
// }
