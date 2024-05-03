
import { useEffect } from "react";
import {
  Achievement,
  Call,
  Categories,
  Hero,
} from "../../components/landingPage";
import Process from "../../components/landingPage/Process";

const Home = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures the effect runs only once after mount

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
