import React from "react";
import "./VideoDetail.css";

const VideoDetail = (props) => {
   return props.data.data.items.map((val) => {
      if (props.videoId === val.id.videoId) {
         return (
            <div className="video-detail">
               <iframe
                  width="800"
                  height="400"
                  src={"https://www.youtube.com/embed/" + props.videoId}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
               ></iframe>
               <div className="videoDescription">
                  <p className="videoDescription__title">{val.snippet.title}</p>
                  <p className="videoDescription__description">
                     {val.snippet.description}
                  </p>
               </div>
            </div>
         );
      }
   });
};

export default VideoDetail;

// export default class VideoDetail extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = {};
//    }

//    render() {
//       return this.props.data.data.items.map((val) => {
//          if (this.props.videoId === val.id.videoId) {
//             return (
//                <div className="video-detail">
//                   <iframe
//                      width="800"
//                      height="400"
//                      src={"https://www.youtube.com/embed/" + this.props.videoId}
//                      title="YouTube video player"
//                      frameborder="0"
//                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                      allowfullscreen
//                   ></iframe>
//                   <div className="videoDescription">
//                      <p className="videoDescription__title">
//                         {val.snippet.title}
//                      </p>
//                      <p className="videoDescription__description">
//                         {val.snippet.description}
//                      </p>
//                   </div>
//                </div>
//             );
//          }
//       });
//    }
// }
