import { Link } from "react-router-dom";
import {
  Achievement,
  Call,
  Categories,
  Footer,
  Hero,
  Navbar,
} from "../../components/landingPage";
import Process from "../../components/landingPage/Process";
import Modal from "../../components/reusables/profilecard/Modal";
import { useState } from "react";
const Home = () => {
  
  return (
    <div className="">
      <div className="">
        
        <Hero />
        <Process />
        <Categories />
        <Achievement />
        <Call /> 
        
      </div>
      
    </div>
  );
};

export default Home;
