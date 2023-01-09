import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Faqsearch from "./components/Faqsearch.jsx/Faqsearch";
import Faq from "./components/Faq/Faq";
import  Stillquestion  from "./components/StillQuestion/Stillquestion";
import Contactus from "./components/Contactus/Contactus";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar/>
        <Banner/>
        <Faqsearch/>
        <Faq />
        <Stillquestion/>
     
      </div>
      <Contactus/>
    </>
  );
}

export default App;
