import React, { useState } from "react";
// import "./App.css";
import axios from "axios";
import Search from "./Search";
import VideoList from "./VIdeoList";
import VideoDetail from "./VideoDetail";
import LeftBar from "./LeftBar";

// import Accordion from "./accordion";

const Youtube = () => {
   const [dataArr, setDataArr] = useState([]);
   const [videoID, setVideoID] = useState("");
   const [data, setData] = useState("");

   const getVideoId = (id) => {
      // this.setState({ videoID: id });
      setVideoID(id);
   };

   const getData = async (inputVal) => {
      const data = await axios("https://www.googleapis.com/youtube/v3/search", {
         params: {
            part: "snippet",
            type: "video",
            maxResults: 15,
            key: "AIzaSyBmDL0NCyq2ZBYwgVLLOWQqAk-CcvrPUXQ",
            q: inputVal,
         },
      });
      console.log(data);
      // this.setState({ dataArr: data.data.items });
      setDataArr(data.data.items);
      // this.setState({ data: data });
      setData(data);
   };

   const showVideo = () => {
      if (videoID) {
         return <VideoDetail videoId={videoID} data={data} />;
      }
   };

   return (
      <div>
         <div
            style={{
               display: "flex",
               position: "fixed",
               top: "0",
               left: "0",
            }}
         >
            <LeftBar />
            <div>
               <Search getSearchVal={getData} />
               <div
                  style={{
                     position: "absolute",
                     padding: "2%",
                     display: "flex",
                     gap: "2%",
                     overflowY: "scroll",
                     backgroundColor: "#f0f0f0",
                     height: "95%",
                     width: "97%",
                  }}
               >
                  {showVideo()}
                  <VideoList data={dataArr} videoIdFunc={getVideoId} />
               </div>
            </div>
         </div>

         {/* <Accordion /> */}
      </div>
   );
};

export default Youtube;

// export default class Youtube extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = { dataArr: [], videoID: "", data: "" };
//    }

//    getVideoId = (id) => {
//       this.setState({ videoID: id });
//    };

//    componentDidUpdate() {
//       console.log(this.state.videoID);
//    }

//    getData = async (inputVal) => {
//       const data = await axios("https://www.googleapis.com/youtube/v3/search", {
//          params: {
//             part: "snippet",
//             type: "video",
//             maxResults: 15,
//             key: "AIzaSyBmDL0NCyq2ZBYwgVLLOWQqAk-CcvrPUXQ",
//             q: inputVal,
//          },
//       });
//       console.log(data);
//       this.setState({ dataArr: data.data.items });
//       this.setState({ data: data });
//    };

//    showVideo = () => {
//       if (this.state.videoID) {
//          return (
//             <VideoDetail videoId={this.state.videoID} data={this.state.data} />
//          );
//       }
//    };

//    render() {
//       return (
//          <div>
//             <div
//                style={{
//                   display: "flex",
//                   position: "fixed",
//                   top: "0",
//                   left: "0",
//                }}
//             >
//                <LeftBar />
//                <div>
//                   <Search getSearchVal={this.getData} />
//                   <div
//                      style={{
//                         position: "absolute",
//                         padding: "2%",
//                         display: "flex",
//                         gap: "2%",
//                         overflowY: "scroll",
//                         backgroundColor: "#f0f0f0",
//                         height: "95%",
//                         width: "97%",
//                      }}
//                   >
//                      {this.showVideo()}
//                      <VideoList
//                         data={this.state.dataArr}
//                         videoIdFunc={this.getVideoId}
//                      />
//                   </div>
//                </div>
//             </div>

//             {/* <Accordion /> */}
//          </div>
//       );
//    }
// }
