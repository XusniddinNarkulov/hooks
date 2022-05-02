import React, { createRef } from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard.js";

const ImageList = (props) => {
   const imageRender = () => {
      return props.dataImg.map((val, key) => {
         return <ImageCard data={val} />;
      });
   };

   return <div className="img-list">{imageRender()}</div>;
};

export default ImageList;

// class ImageList extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = {};
//    }

//    imageRender = () => {
//       return this.props.dataImg.map((val, key) => {
//          return <ImageCard data={val} />;
//       });
//    };

//    render() {
//       return <div className="img-list">{this.imageRender()}</div>;
//    }
// }

// export default ImageList;
