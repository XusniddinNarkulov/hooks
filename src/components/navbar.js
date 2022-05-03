import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <div
         className="navbar"
         style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            margin: "0 auto",
            padding: "1%",
         }}
      >
         <p>
            <Link to="/accordion">Accordion</Link>
         </p>
         {/* <p>
            <Link to="/wiki">Search Wiki</Link>
         </p> */}
         <p>
            <Link to="/dropdown">Dropdown</Link>
         </p>
         {/* <p>
            <Link to="/translate">Translate</Link>
         </p> */}
         <p>
            <Link to="/youtube">Youtube</Link>
         </p>
         <p>
            <Link to="/weather">Weather</Link>
         </p>
         <p>
            <Link to="/unsplash">Unsplash</Link>
         </p>
      </div>
   );
};

export default Navbar;
