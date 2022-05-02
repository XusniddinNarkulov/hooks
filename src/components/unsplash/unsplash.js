import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar.js";
import ImageList from "./ImageList.js";

const Unsplash = () => {
   const [imageArr, setImageArr] = useState([]);
   const [per, setPer] = useState(5);
   const [kalit, setKalit] = useState();

   const searchdanMalumotniOl = async (imgData) => {
      // this.setState({ kalit: imgData });
      setKalit(imgData);
      const data = await axios.get("https://api.unsplash.com/search/photos", {
         params: {
            query: imgData,
            per_page: per,
         },
         headers: {
            Authorization:
               "Client-ID fFxqUKuJS8hx3nwzRQoYiHB5URcqFjkGG-FSsZUDOb4",
         },
      });
      // this.setState({ imageArr: data.data.results });
      setImageArr(data.data.results);
      // console.log(data);
   };

   const loadMore = () => {
      // this.setState({ per: this.state.per + 5 });
      setPer(per + 5);
      // this.searchdanMalumotniOl(this.state.kalit);
      searchdanMalumotniOl(kalit);
   };

   return (
      <div style={{ height: "auto" }}>
         <SearchBar malumotniOl={searchdanMalumotniOl} />
         <ImageList dataImg={imageArr} />
         {imageArr[0] ? <button onClick={loadMore}>Loadmore</button> : ""}
         {/* <div>{this.state.imageArr.length}</div> */}
      </div>
   );
};

// class Unsplash extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = { imageArr: [], per: 5, kalit: "" };
//    }

//    searchdanMalumotniOl = async (imgData) => {
//       this.setState({ kalit: imgData });
//       const data = await axios.get("https://api.unsplash.com/search/photos", {
//          params: {
//             query: imgData,
//             per_page: this.state.per,
//          },
//          headers: {
//             Authorization:
//                "Client-ID fFxqUKuJS8hx3nwzRQoYiHB5URcqFjkGG-FSsZUDOb4",
//          },
//       });
//       this.setState({ imageArr: data.data.results });
//       console.log(data);
//    };

//    loadMore = () => {
//       // this.setState((old) => {
//       //    return { per: old.per + 5 };
//       // });
//       this.setState({ per: this.state.per + 5 });
//       this.searchdanMalumotniOl(this.state.kalit);
//    };

//    render() {
//       return (
//          <div style={{ height: "auto" }}>
//             <SearchBar malumotniOl={this.searchdanMalumotniOl} />
//             <ImageList dataImg={this.state.imageArr} />
//             {this.state.imageArr[0] ? (
//                <button onClick={this.loadMore}>Loadmore</button>
//             ) : (
//                ""
//             )}
//             {/* <div>{this.state.imageArr.length}</div> */}
//          </div>
//       );
//    }
// }

export default Unsplash;
