import aboutus from "../../../assets/aboutus.png";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="grid grid-cols-2 my-[100px] w-[90%] mx-[5%] lg:w-[80%] lg:mx-[10%] gap-12">
      <div className="col-span-2 md:w-full xl:col-span-1" data-aos="zoom-in">
        <img src={aboutus} alt="about image" />
      </div>
      <div className="col-span-2 xl:col-span-1">
        <div className="flex gap-1" data-aos-duration="1500">
          <hr className="border border-blue w-[50px] mt-4" />
          <h1 className="text-primary font-semibold text-xl 2xl:text-4xl">
            About us
          </h1>
        </div>
        <h1
          className="my-8 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-semibold leading-20 text-black/80"
          data-aos="fade-left"
          ata-aos-duration="2000"
        >
          Millions of Jobs, Find <br /> the one that suits <br />
          you.
        </h1>
        <p
          className="text-xl leading-8 text-gray font-semibold"
          data-aos="fade-left"
          data-aos-duration="2500"
        >
          It is a long established fact that a reader will be distracted by the
          real conten of a page when looking at its layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution
        </p>
        <ul
          className="list-disc marker:text-blue mx-4 lg:mx-auto mt-8 my-4"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <li className="text-xl font-semibold text-black/80">
            Bring to the table win-win survival
          </li>
          <li className="text-xl font-semibold text-black/80 my-4">
            Capitalize on low hanging fruit to identify
          </li>
          <li className="text-xl font-semibold text-black/80">
            But I must explain to you how all this
          </li>
        </ul>
        <Link to="/about" data-aos="zoom-in" data-aos-duration="3000">
          <button className="font-semibold text-white bg-blue hover:bg-black rounded-3xl py-2 px-3 transition-all ease-in-out duration-500 w-fit">
            Read More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
