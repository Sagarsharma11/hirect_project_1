import React from "react";
import Support from "./Pages/Support";
import Video from "./Pages/Video";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/support" element={<Support title={'Support'} />} />
          <Route exact path='/' element={<Video title={'Video'} />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
