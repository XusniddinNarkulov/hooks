import React, { useState } from "react";

const SearchBar = (props) => {
   const [state, setState] = useState();

   const inputMalumot = (e) => {
      // this.setState({ kalitSuz: e.target.value });
      setState(e.target.value);
   };

   const formOnSubmit = (e) => {
      e.preventDefault();
      props.malumotniOl(state);
   };

   return (
      <div>
         <form
            onSubmit={formOnSubmit}
            className="ui category search"
            style={{ margin: "0 auto" }}
         >
            <div
               className="ui icon input"
               //  style={{ width: "100%", margin: "0 auto" }}
            >
               <input
                  // style={{ margin: "0 auto" }}
                  onChange={inputMalumot}
                  className="prompt"
                  type="text"
                  placeholder="Search animals..."
               />
               <i className="search icon"></i>
            </div>
            <div className="results"></div>
         </form>
      </div>
   );
};

// class SearchBar extends React.Component {
//    constructor(props) {
//       super(props);
//       // console.log(props);
//       this.state = { kalitSuz: "" };
//       // this.inputMalumot = this.inputMalumot.bind(this);
//    }

//    // state = { kalitSuz: "" };

//    inputMalumot = (e) => {
//       this.setState({ kalitSuz: e.target.value });
//    };

//    formOnSubmit = (e) => {
//       e.preventDefault();
//       this.props.malumotniOl(this.state.kalitSuz);

//       // this.setState({ kalitSuz: "" });
//    };

//    render() {
//       return (
//          <div style={{}}>
//             <form onSubmit={this.formOnSubmit} className="ui category search">
//                <div className="ui icon input" style={{ width: "100%" }}>
//                   <input
//                      onChange={this.inputMalumot}
//                      className="prompt"
//                      type="text"
//                      placeholder="Search animals..."
//                   />
//                   <i className="search icon"></i>
//                </div>
//                <div className="results"></div>
//             </form>
//          </div>
//       );
//    }
// }

export default SearchBar;
