import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
   const [term, setTerm] = useState("");
   const [results, setResults] = useState([]);

   const changeTerm = (e) => {
      setTerm(e.target.value);
   };

   useEffect(() => {
      const getData = async () => {
         const data = await axios.get("https://en.wikipedia.org/w/api.php", {
            params: {
               action: "query",
               list: "search",
               format: "json",
               origin: "*",
               srsearch: term,
               // key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
            },
         });

         setResults(data.data.query.search);
      };
      const timer = setTimeout(() => {
         if (term) {
            getData();
         } else if (!term && results.length) {
            setResults([]);
         }
      }, 1000);
      return () => {
         clearTimeout(timer);
      };
   }, [term, results.length]);

   const renderResult = () => {
      return results.map((val) => {
         return (
            <div className="ui message" key={val.pageid}>
               <div className="header">{val.title}</div>
               <p dangerouslySetInnerHTML={{ __html: val.snippet }}></p>
               <a
                  className="button ui green"
                  href={`https://en.wikipedia.org/wiki?curid=${val.pageid}`}
               >
                  Go page
               </a>
            </div>
         );
      });
   };

   return (
      <div className="ui container" style={{ marginTop: "40px" }}>
         <h1 style={{ textAlign: "center" }}>Wikipedia Searching</h1>
         <div
            className="ui input focus"
            style={{ width: "100%", marginBottom: "20px" }}
         >
            <input
               onChange={changeTerm}
               value={term}
               type="text"
               placeholder="Search..."
            />
         </div>
         <div>{renderResult()}</div>
      </div>
   );
};

export default Search;
