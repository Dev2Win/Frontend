
import {
  Achievement,
  Call,
  Categories,
  Hero,
} from "../../components/landingPage";
import Process from "../../components/landingPage/Process";

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
