import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import { 
  homeObjOne, 
  homeObjTwo, 
  homeObjThree
} from "../components/Portfolio/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Banner />
      <Portfolio {...homeObjOne} />
      <Portfolio {...homeObjTwo} />
      <Services />
      <Portfolio {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
