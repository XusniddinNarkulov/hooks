import React from "react";
// import "./VideoList.css";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = (props) => {
   const listRender = () => {
      return props.data.map((val) => {
         return (
            <VideoItem
               func={props.videoIdFunc}
               key={val.id.videoId}
               data={val}
            />
         );
      });
   };

   return <div className="videoList">{listRender()}</div>;
};

export default VideoList;

// export default class VideoList extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = {};
//    }

//    listRender = () => {
//       return this.props.data.map((val) => {
//          return (
//             <VideoItem
//                func={this.props.videoIdFunc}
//                key={val.id.videoId}
//                data={val}
//             />
//          );
//       });
//    };

//    render() {
//       return <div className="videoList">{this.listRender()}</div>;
//    }
// }
