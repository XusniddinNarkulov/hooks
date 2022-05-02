import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "./dropDown";
// import Convert from "./Convert";

const dataDropdown = [
   { label: "Uzbek", value: "uz" },
   { label: "English", value: "en" },
   { label: "Russian", value: "ru" },
   { label: "Arabic", value: "ar" },
];

const Translate = () => {
   const [term, setTerm] = useState("");
   const [translate, setTranslate] = useState("");
   const [result, setResult] = useState("");

   const getInputData = (e) => {
      setTerm(e.target.value);
   };

   const getDropdown = (data) => {
      setTranslate(data);
   };
   console.log(translate);

   useEffect(() => {
      const getData = async () => {
         const data = await axios.post(
            "https://translation.googleapis.com/language/translate/v2",
            {},
            {
               params: {
                  q: term,
                  target: translate.value,
                  format: "text",
                  key: "AIzaSyCSgcnEPkTY8ChJ9NVDOFr9A7cZLAlKyQM",
               },
            }
         );
         setResult(data.data.data.translations[0].translatedText);
      };
      const timer = setTimeout(() => {
         if (term) {
            getData();
         }
      }, 1000);

      return () => {
         clearTimeout(timer);
      };
   }, [term, translate]);

   console.log(term);

   return (
      <div className="ui container">
         <h1>Translate App</h1>
         <form className="ui form">
            <div className="ui input focus" style={{ width: "50%" }}>
               <input
                  onChange={getInputData}
                  type="text"
                  placeholder="Enter text..."
               />
            </div>
         </form>
         <Dropdown
            data={dataDropdown}
            getData={getDropdown}
            label="Translate to"
         />
         <h1>Output:</h1>
         <h1>{result}</h1>
      </div>
   );
};

export default Translate;
