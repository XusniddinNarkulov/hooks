import React, { useState } from "react";

function Accordion(props) {
   const [state, setState] = useState("");

   return props.data.map((val, key) => {
      return (
         <div className="ui accordion">
            <div
               className="title"
               onClick={() => {
                  setState(key);
               }}
            >
               <i className="dropdown icon"></i>
               {val.title}
            </div>
            <div className={`content ${state == key ? "active" : ""}`}>
               <p className={`transition ${state == key ? "" : "hidden"}`}>
                  {val.content}
               </p>
            </div>
         </div>
      );
   });
}

export default Accordion;
