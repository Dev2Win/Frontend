import React, { useState } from "react";
import mentor from "../../assets/8SCENE.svg";
import mentee from "../../assets/9SCENE.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface Option {
  label: string;
  description: string;
  Image: string;
  path: string;
}

const UserType = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const navigate = useNavigate(); // Initialize useHistory hook

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    navigate(option.path);
  };

  const options: Option[] = [
    {
      label: "Mentor",
      description: "Share your expertise with aspiring developers at Dev2Win.",
      Image: mentor,
      path: "/onBoarding/mentor",
    },
    {
      label: "Mentee",
      description:
        "Unlock your potential with personalized mentorship at Dev2Win.",
      Image: mentee,
      path: "/onBoarding/mentee",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold ">
          Dev<span className="text-primary">2</span>Win
        </h1>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          How are you planning to contribute to Dev2Win
        </h2>
        <p className="text-gray-600 mb-8">
          We'll streamline your setup experience accordingly.
        </p>

        <div className="flex justify-center">
          {options.map((option, index) => (
            <div
              key={index}
              className={`px-6 py-4 mx-4 rounded-lg cursor-pointer transition-colors duration-300 ${
                selectedOption === option
                  ? "bg-purple-600 text-white"
                  : "bg-white shadow-lg shadow-green-300/40 text-gray-700 hover:bg-green-300/40"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <div>
                <img src={option.Image} alt="image" />
              </div>
              <p className="font-semibold text-primary">{option.label}</p>
              <p className="text-sm ">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserType;
