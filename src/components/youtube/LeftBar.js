import React, { Component } from "react";
import "./LeftBar.css";

const LeftBar = () => {
   return (
      <div className="left-bar">
         <i className="bars icon"></i>
         <div className="child">
            <i className="home icon"></i>
            <b>Home</b>
         </div>
         <div className="child">
            <i className="compass outline icon"></i>
            <b>Explore</b>
         </div>
         <div className="child">
            <i className="youtube icon"></i>
            <b>Shorts</b>
         </div>
         <div className="child">
            <i className="youtube icon"></i>
            <b>Subscriptions</b>
         </div>
         <div className="child">
            <i className="youtube icon"></i>
            <b>Library</b>
         </div>
      </div>
   );
};

export default LeftBar;

// export default class LeftBar extends Component {
//    render() {
//       return (
//          <div className="left-bar">
//             <i className="bars icon"></i>
//             <div className="child">
//                <i className="home icon"></i>
//                <b>Home</b>
//             </div>
//             <div className="child">
//                <i className="compass outline icon"></i>
//                <b>Explore</b>
//             </div>
//             <div className="child">
//                <i className="youtube icon"></i>
//                <b>Shorts</b>
//             </div>
//             <div className="child">
//                <i className="youtube icon"></i>
//                <b>Subscriptions</b>
//             </div>
//             <div className="child">
//                <i className="youtube icon"></i>
//                <b>Library</b>
//             </div>
//          </div>
//       );
//    }
// }


