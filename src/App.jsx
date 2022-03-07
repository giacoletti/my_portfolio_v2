import React from "react";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Parallax from "./components/Parallax";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
  return (
    <>
      <Navbar />
      <ParallaxProvider>
        <Parallax />
      </ParallaxProvider>
      <MainContainer />
    </>
  );
};

export default App;
