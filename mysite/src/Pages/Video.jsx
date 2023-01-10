import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import VideoHead from '../components/VideoHead/VideoHead';
import Fullvideogallery from '../components/VideoTwo/Fullvideogallery';
import VideoTwo from '../components/VideoTwo/VideoTwo';

const Video = (props) => {
  return (
    <>
      <div className="container-fluid">
        <Banner title={props.title} />
        <VideoHead />
      </div>
      <VideoTwo />
      <Fullvideogallery />
      <Footer />
    </>
  )
}

export default Video