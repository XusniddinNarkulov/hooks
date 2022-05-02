import React from "react";

const DisplaySeason = (props) => {
   const getSeason = (lat, month) => {
      let sunIcon = (
         <i
            className="sun icon inverted yellow"
            style={{ color: "#FFE6CC" }}
         ></i>
      );
      let summerText = "Let's hit the beach";
      let snowIcon = (
         <i
            className="snowflake icon inverted teal "
            style={{ color: "#DBE7FC" }}
         ></i>
      );
      let winterText = "Burr,it's chilly";

      if (month > 2 && month < 9) {
         return lat > 0 ? [sunIcon, summerText] : [snowIcon, winterText];
      }
      if (month > 2 && month < 9) {
         return lat < 0 ? [snowIcon, winterText] : [sunIcon, summerText];
      }
   };

   const getMonth = new Date().getMonth();

   return (
      <div
         className="container"
         style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "2%",
            height: "90vh",
         }}
      >
         <div
            className="icon icon1"
            style={{ alignSelf: "", fontSize: "160px" }}
         >
            {getSeason(props.lat, getMonth)[0]}
         </div>
         <h1 className="text" style={{ alignSelf: "center", fontSize: "70px" }}>
            {getSeason(props.lat, getMonth)[1]}
         </h1>
         <div
            className="icon icon1"
            style={{ alignSelf: "flex-end", fontSize: "160px" }}
         >
            {getSeason(props.lat, getMonth)[0]}
         </div>
      </div>
   );
};

// class DisplaySeason extends React.Component {
//    constructor(props) {
//       super(props);
//       console.log(props.lat);
//    }

//    getSeason(lat, month) {
//       let sunIcon = (
//          <i
//             className="sun icon inverted yellow"
//             style={{ color: "#FFE6CC" }}
//          ></i>
//       );
//       let summerText = "Let's hit the beach";
//       let snowIcon = (
//          <i
//             className="snowflake icon inverted teal "
//             style={{ color: "#DBE7FC" }}
//          ></i>
//       );
//       let winterText = "Burr,it's chilly";

//       if (month > 2 && month < 9) {
//          return lat > 0 ? [sunIcon, summerText] : [snowIcon, winterText];
//       }
//       if (month > 2 && month < 9) {
//          return lat < 0 ? [snowIcon, winterText] : [sunIcon, summerText];
//       }
//    }

//    getMonth() {
//       return new Date().getMonth();
//    }

//    render() {
//       console.log();
//       return (
//          <div
//             className="container"
//             style={{
//                display: "flex",
//                justifyContent: "space-between",
//                padding: "2%",
//                height: "90vh",
//             }}
//          >
//             <div
//                className="icon icon1"
//                style={{ alignSelf: "", fontSize: "160px" }}
//             >
//                {this.getSeason(this.props.lat, this.getMonth())[0]}
//             </div>
//             <h1
//                className="text"
//                style={{ alignSelf: "center", fontSize: "70px" }}
//             >
//                {this.getSeason(this.props.lat, this.getMonth())[1]}
//             </h1>
//             <div
//                className="icon icon1"
//                style={{ alignSelf: "flex-end", fontSize: "160px" }}
//             >
//                {this.getSeason(this.props.lat, this.getMonth())[0]}
//             </div>
//          </div>
//       );
//    }
// }

// module.exports = DisplaySeason;
export default DisplaySeason;
