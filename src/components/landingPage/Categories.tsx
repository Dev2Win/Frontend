import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import CS1 from "../../assets/supply-chain.jpg";
import CS4 from "../../assets/xyz.jpg";
import CS5 from "../../assets/e-commerce.jpg";
import CS6 from "../../assets/marketing.jpg";

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // const nextItems = () => {
  //   const newIndex = currentIndex + itemsPerPage;
  //   if (newIndex < cardsData.length) {
  //     setCurrentIndex(newIndex);
  //   } else {
  //     // Start from the top if reaching the end
  //     setCurrentIndex(0);
  //   }
  // };

  // const prevItems = () => {
  //   const newIndex = currentIndex - itemsPerPage;
  //   if (newIndex >= 0) {
  //     setCurrentIndex(newIndex);
  //   } else {
  //     // Go to the end if reaching the top
  //     setCurrentIndex(cardsData.length - itemsPerPage);
  //   }
  // };

  const nextItems = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const prevItems = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length
    );
  };

  // Update itemsPerPage based on breakpoints
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setItemsPerPage(3); // Set the number of items per page for larger screens
    } else if (window.innerWidth >= 768) {
      setItemsPerPage(2); // Set the number of items per page for medium screens
    } else {
      setItemsPerPage(1); // Set the number of items per page for small screens
    }
  };

  // Call handleResize on component mount and window resize
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="my-[120px] mx-[5%] w-[90%] lg:w-[86%] lg:mx-[7%]">
      <h1 className=" text-4xl  mb-16 font-semibold">Career Areas </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((card) => (
            <div key={card.id} className="col-span-2 md:col-span-1">
              <div className="group relative overflow-hidden">
                <img
                  height="auto"
                  width="auto"
                  src={card.image}
                  alt=" image"
                  className="rounded-lg w-full  h-80 transform transition-transform group-hover:scale-110 ease-in-out duration-300 hover:cursor-pointer"
                />
              </div>
              <Link to="">
                <p className="font-bold text-3xl hover:text-purple-900 my-4">
                  {" "}
                  {card.title}
                </p>
              </Link>
              <p className="font-medium my-2">{card.detail}</p>
              <div className="text-purple-900 font-medium">
                {card.categories.map((category, categoryIndex) => (
                  <span key={categoryIndex}>
                    <Link to="">{category.name}</Link>
                    {categoryIndex < card.categories.length - 1 ? " / " : ""}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div className="flex space-x-8 mt-4">
        <button
          onClick={prevItems}
          className=" border border-slate-300 hover:text-white hover:bg-violet-700 rounded-full p-3"
        >
          {" "}
          <GoArrowLeft width={60} height={60} />{" "}
        </button>
        <button
          onClick={nextItems}
          className=" border border-slate-300 hover:text-white hover:bg-violet-700 rounded-full p-3"
        >
          {" "}
          <GoArrowRight width={40} height={60} />{" "}
        </button>
      </div>
    </section>
  );
};

export default Categories;

export const cardsData = [
  {
    id: "1",
    image: CS1,
    title: "Computer Engineering ",
    detail:
      "Our career development in computer engineering ensures you understand the basis of the career and introduces you to skills development path available in the career ",
    categories: [
      { name: "Hardware Engineering", link: "it-consultancy" },
      { name: "Software Engineering", link: "design" },
      { name: "Cybersecurity", link: "design" },
      { name: "Networking", link: "design" },
    ],
  },
  {
    id: "4",
    image: CS4,
    title: "Computer Science",
    detail:
      "Our career development in computer Science ensures you understand the basis of the career and introduces you to skills development path available in the career ",

    categories: [
      { name: "Software Development", link: "development" },
      { name: "UI/UX", link: "design" },
      { name: "CyberSecurity", link: "design" },
      { name: "Networking", link: "design" },
    ],
  },
  {
    id: "5",
    image: CS5,
    title: "Business Acounting",
    detail:
      "Our career development in Business Acoounting ensures you understand the basis of the career and introduces you to skills development path available in the career ",

    categories: [
      { name: "Business Intelligence", link: "it-consultancy" },
      { name: "Data analysis", link: "development" },
      { name: "Enterpreneurship", link: "design" },
      { name: "Business Management", link: "design" },
    ],
  },
  {
    id: "6",
    image: CS6,
    title: "Electrical Engineering",
    detail:
      "Our career development in Electrical Engineering ensures you understand the basis of the career and introduces you to skills development path available in the career ",

    categories: [
      { name: "Power Systems Design", link: "design" },
      { name: "Hardware Automation", link: "it-consultancy" },
      { name: "Control System Design", link: "design" },
      { name: "Electrical Wiring", link: "design" },
    ],
  },
];
