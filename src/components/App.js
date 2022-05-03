import React from "react";
import Dropdown from "./dropDown";
import Accordion from "./Accordion";
import Youtube from "./youtube/youtube";
import Unsplash from "./unsplash/unsplash";
import Season from "./season/season";
import Navbar from "./navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Search from "./search";
// import Translate from "./translate";

const accordionData = [
   {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
     laborum cupiditate possimus labore, hic temporibus velit dicta earum
     suscipit commodi eum enim atque at? Et perspiciatis dolore iure
     voluptatem.`,
   },
   {
      title: "Section 2",
      content: `Por ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
     reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
     quaerat iure quos dolorum accusantium ducimus in illum vero commodi
     pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
     quidem maiores doloremque est numquam praesentium eos voluptatem amet!
     Repudiandae, mollitia id reprehenderit a ab odit!`,
   },
   {
      title: "Section 3",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
     quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
     dolor ut sequi minus iste? Quas?`,
   },
];

const dataDropdown = [
   {
      label: "The Color Red",
      value: "red",
   },
   {
      label: "The Color Green",
      value: "green",
   },
   {
      label: "The Color Blue",
      value: "blue",
   },
];

const App = () => {
   return (
      <Router>
         <Navbar />
         <Routes>
            {/* <Route path="/" exact element={<Accordion />} /> */}
            <Route
               path="/accordion"
               element={<Accordion data={accordionData} />}
            />
            <Route
               path="/dropdown"
               element={<Dropdown data={dataDropdown} />}
            />
            {/* <Route path="/translate" element={Translate} /> */}
            {/* <Route path="/wiki" element={Search} /> */}
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/unsplash" element={<Unsplash />} />
            <Route path="/weather" element={<Season />} />
         </Routes>
      </Router>
   );
};

export default App;
