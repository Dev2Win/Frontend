import React, { useState } from "react";
import OnBoard from "../../assets/5SCENE.svg";

interface MyComponentProps {
  formData: any;
  onPrev: () => void;
  onNext: (data: any) => void; // Add type for onNext function
}

const Interests: React.FC<MyComponentProps> = ({
  formData,
  onPrev,
  onNext,
}) => {
  const [interestsData, setInterestsData] = useState({
    desiredSkills: [] as string[],
    experienceLevel: "",
    industryPreference: [] as string[], // Specify type for industryPreference
  });

  const skillOptions = [
    "React",
    "Node.js",
    "Python",
    "JavaScript",
    "Machine Learning",
    "UI/UX Design",
    "Digital Marketing",
    "Project Management",
    "Other",
  ];

  const experienceLevels = [
    "Novice",
    "Intermediate",
    "Experienced",
    "Professional",
  ];

  const industryOptions = [
    "FinTech",
    "E-commerce",
    "Healthcare",
    "Education",
    "Technology",
    "Other",
  ];

  const handleSkillChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { options } = e.target;
    const selectedSkills = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setInterestsData({ ...interestsData, desiredSkills: selectedSkills });
  };

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Change type to React.ChangeEvent<HTMLSelectElement>
    const { options } = e.target;
    const selectedIndustries = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setInterestsData({
      ...interestsData,
      industryPreference: selectedIndustries,
    }); // Update state with selectedIndustries
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation logic can be added here if needed
    onNext({ ...formData, ...interestsData });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full   items-center justify-center"
    >
      <div className="w-1/2 ">
        <h1 className="hidden lg:block text-2xl font-semibold text-center">
          Let&apos;s continue......
        </h1>
        <img src={OnBoard} alt="" className="hidden  w-full lg:block" />
      </div>
      <div className="border p-8 my-8 w-2/3 lg:ml-[-4rem] ml-[-16rem] lg:w-1/2 shadow-xl  rounded-lg inline-flex flex-col gap-y-10">
        <div>
          <h2 className="mb-8 text-2xl font-semibold text-center">Interests</h2>
          <div>
            <label htmlFor="desiredSkills" className="font-semibold">
              Desired Skills:
            </label>
            <select
              multiple
              id="desiredSkills"
              name="desiredSkills"
              value={interestsData.desiredSkills}
              onChange={handleSkillChange}
              required
              className="border-[2px] placeholder:text-black/ border-green-300/40 w-full focus:outline-none focus:border- outline-green-300/40 none rounded-md py-4 "
            >
              {skillOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <small>
              Hold Ctrl (Cmd on Mac) to select multiple options or to deselect
            </small>
          </div>
        </div>
        <div>
          <label htmlFor="experienceLevel" className="font-semibold">
            Experience Level:
          </label>
          <select
            id="experienceLevel"
            name="experienceLevel"
            value={interestsData.experienceLevel}
            onChange={(e) =>
              setInterestsData({
                ...interestsData,
                experienceLevel: e.target.value,
              })
            } // Inline function to handle change
            required
            className="border-[2px] placeholder:text-black/ border-green-300/40 w-full focus:outline-none focus:border- outline-green-300/40 none rounded-md py-4 "
          >
            <option value="">Select Experience Level</option>
            {experienceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="industryPreference" className="font-semibold">
            Industry Preference:
          </label>
          <select
            multiple
            id="industryPreference"
            name="industryPreference"
            value={interestsData.industryPreference}
            onChange={handleIndustryChange} // Use handleIndustryChange for onChange
            required
            className="border-[2px] placeholder:text-black/ border-green-300/40 w-full focus:outline-none focus:border- outline-green-300/40 none rounded-md py-4 "
          >
            {industryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <small>
            Hold Ctrl (Cmd on Mac) to select multiple options or to deselect
          </small>
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
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default Interests;
