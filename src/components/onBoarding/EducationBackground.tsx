import React, { useState } from "react";
import OnBoard from "../../assets/2SCENE.svg";

const EducationBackground: React.FC<{ formData: any; onPrev: () => void }> = ({
  formData,
  onPrev,
}) => {
  const [educationData, setEducationData] = useState({
    highestEducationLevel: "",
    fieldOfStudy: "",
    certifications: "",
  });

  const educationLevels = [
    "High School",
    "Bachelor's",
    "Master's",
    "PhD",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEducationData({ ...educationData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation logic can be added here if needed
    console.log({ ...formData, ...educationData }); // You can handle form submission here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full   items-center justify-center"
    >
      <div className="w-1/2 ">
        <h1 className="hidden lg:block text-2xl font-semibold text-center">
          Let&apos;s Finish Up!!!
        </h1>
        <img src={OnBoard} alt="" className="hidden  w-full lg:block" />
      </div>
      <div className="border p-8 my-8 w-2/3 lg:ml-[-4rem] ml-[-16rem] lg:w-1/2 shadow-xl  rounded-lg inline-flex flex-col gap-y-10">
        <div>
          <h2 className="mb-8 text-2xl font-semibold text-center">
            Education Background
          </h2>
          <div>
            <label htmlFor="highestEducationLevel" className="font-semibold">
              Highest Education Level:
            </label>
            <select
              id="highestEducationLevel"
              name="highestEducationLevel"
              value={educationData.highestEducationLevel}
              onChange={handleChange}
              required
              className="border-[2px] placeholder:text-black/ border-green-300/40 w-full focus:outline-none focus:border- outline-green-300/40 none rounded-md py-4 "
            >
              <option value="">Select Education Level</option>
              {educationLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="fieldOfStudy" className="font-semibold">
            Field of Study:
          </label>
          <input
            type="text"
            id="fieldOfStudy"
            name="fieldOfStudy"
            value={educationData.fieldOfStudy}
            onChange={handleChange}
            required
            className="border-[2px] placeholder:text-black/ border-green-300/40 w-full focus:outline-none focus:border- outline-green-300/40 none rounded-md py-4 "
          />
        </div>
        <div>
          <label htmlFor="certifications" className="font-semibold">
            Certifications:
          </label>
          <input
            type="text"
            id="certifications"
            name="certifications"
            value={educationData.certifications}
            onChange={handleChange}
            className="border-[2px] placeholder:text-black/10 border-green-300/40 w-full focus:outline-none focus:border- outline-green-300/40 none rounded-md py-4 "
          />
        </div>
        <div className="inline-flex content-center items-center justify-center gap-4">
          <button
            type="button"
            onClick={onPrev}
            className="bg-primary w-1/3 rounded-lg text-white py-2"
          >
            Previous
          </button>
          <button
            type="submit"
            className="bg-primary w-1/3 rounded-lg text-white py-2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default EducationBackground;
