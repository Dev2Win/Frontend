import member from "../../../assets/pexels-fauxels-3184644.jpg";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const members = [
  {
    image: member,
    name: "Simon Adjei",
    position: "Founder/ Software Engineer",
  },
  {
    image: member,
    name: "Obeng Kwabena ",
    position: "Founder/Data Scientist",
  },
  {
    image: member,
    name: "Josephine Black",
    position: "Project Manager",
  },
  {
    image: member,
    name: "Genesis",
    position: "Product Manager",
  },
  {
    image: member,
    name: "Prince Black ",
    position: "Software Engineer(Backend)",
  },
  {
    image: member,
    name: "Micheal Kokonu",
    position: "Software Engineer(Backend)",
  },

  {
    image: member,
    name: "Vincent Gyabeng",
    position: "Frontend Engineer",
  },
  {
    image: member,
    name: "New Slot",
    position: "Designer",
  },
];

const TeamCards = () => {
  return (
    <section className="mx-[3%] mb-[2%] w-[94%] lg:w-[90%] lg:mx-[5%] mt-[100px] sm:mt-[180px] md:mt-8">
      <div className="grid grid-cols-12  gap-8">
        {members.map((member, index) => (
          <article
            key={index}
            data-aos="fade-up"
            className="relative col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
          >
            <img
              src={member.image}
              alt="team member"
              className="rounded-md h-[24rem] w-full"
            />
            <div className="absolute right-8 bottom-24">
              <FaFacebookF
                size={35}
                className="text-white bg-[#1a0533] p-2 rounded-full hover:bg-white hover:text-violet-700 transition-all duration-500 cursor-pointer"
              />
              <FaInstagram
                size={35}
                className="text-white my-2 bg-[#1a0533] p-2 rounded-full hover:bg-white hover:text-violet-700 transition-all duration-500 cursor-pointer"
              />
              <FaXTwitter
                size={35}
                className="text-white bg-[#1a0533] p-2 rounded-full hover:bg-white hover:text-violet-700 transition-all duration-500 cursor-pointer"
              />
            </div>
            <h1 className="text-2xl font-bold text-black/80 mt-3">
              {member.name}
            </h1>
            <p className="text-lg text-black/60 font-semibold mb-3">
              {member.position}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TeamCards;
