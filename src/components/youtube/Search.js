import { logDOM } from "@testing-library/react";
import React, { useState } from "react";
import "./Search.css";

const Search = (props) => {
   const [state, setState] = useState("");

   const inputValue = (e) => {
      //   e.preventDefault();
      setState(e.target.value);
   };

   const formOnSubmit = (e) => {
      e.preventDefault();
      // this.props.getSearchVal(this.state.inputVal);
      props.getSearchVal(state);
   };

   return (
      <div className="top-bar">
         <div className="top-bar__left">
            <i className="youtube icon"></i>
            <b>YouTube</b>
         </div>
         <form onSubmit={formOnSubmit} className="ui category search">
            <div className="ui icon input">
               <input
                  onChange={inputValue}
                  className="prompt"
                  type="text"
                  placeholder="Search..."
               />
               <i className="search icon"></i>
            </div>
            <i className="microphone icon"></i>
            <div className="results"></div>
         </form>
         <div className="top-bar__right">
            <i className="video icon"></i>
            <i className="th icon"></i>
            <i className="bell outline icon"></i>
         </div>
      </div>
   );
};

export default Search;

// export default class Search extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = { inputVal: "" };
//    }

//    inputValue = (e) => {
//       //   e.preventDefault();
//       this.setState({ inputVal: e.target.value });
//    };

//    formOnSubmit = (e) => {
//       e.preventDefault();
//       this.props.getSearchVal(this.state.inputVal);
//    };

//    render() {
//       return (
//          <div className="top-bar">
//             <div className="top-bar__left">
//                <i class="youtube icon"></i>
//                <b>YouTube</b>
//             </div>
//             <form onSubmit={this.formOnSubmit} className="ui category search">
//                <div className="ui icon input">
//                   <input
//                      onChange={this.inputValue}
//                      className="prompt"
//                      type="text"
//                      placeholder="Search..."
//                   />
//                   <i className="search icon"></i>
//                </div>
//                <i class="microphone icon"></i>
//                <div className="results"></div>
//             </form>
//             <div className="top-bar__right">
//                <i class="video icon"></i>
//                <i class="th icon"></i>
//                <i class="bell outline icon"></i>
//             </div>
//          </div>
//       );
//    }
// }
