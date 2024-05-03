import React, { useState } from "react";
import OnBoard from "../../assets/3SCENE.svg";

const PersonalInfo = ({ onNext }: { onNext: any }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    careerPath: "",
  });

  const careerOptions = [
    "Web Development",
    "Mobile Development",
    "Data Science",
    "UI/UX Design",
    "Digital Marketing",
    "Project Management",
    "Business Analysis",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validation logic can be added here if needed
    onNext(formData);
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
        <div className="">
          <h2 className="mb-8 text-2xl font-semibold text-center">
            Personal Information
          </h2>
          <div>
            <label htmlFor="firstName" className="font-semibold">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="Your First Name"
              className="border-[2px] placeholder:text-black/ border-green-300/40 w-full focus:outline-none focus:border- outline-green-300/40 none rounded-md py-4 "
            />
          </div>
        </div>
        <div>
          <label htmlFor="lastName" className="font-semibold">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Your Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="border-[2px] border-green-300/40 w-full focus:outline-none focus:border-green-300/40 outline-none rounded-md py-4 "
          />
        </div>
        <div className="mr-[-1rem]">
          <label htmlFor="email" className="font-semibold">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-[2px] border-green-300/40 w-full focus:outline-none focus:border-green-300/40 outline-none rounded-md py-4 "
          />
        </div>
        <div>
          <label htmlFor="password" className="font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border-[2px] border-green-300/40 w-full focus:outline-none focus:border-green-300/40 outline-none rounded-md py-4 "
          />
        </div>
        <div className="">
          <label htmlFor="careerPath" className="font-semibold">
            Career Path:
          </label>
          <select
            id="careerPath"
            name="careerPath"
            value={formData.careerPath}
            onChange={handleChange}
            required
            className="border-[2px] border-green-300/40 w-full focus:outline-none focus:border-green-300/40  outline-none rounded-md py-4 "
          >
            <option value="" className="">
              Select Career Path
            </option>
            {careerOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-primary w-1/2 rounded-lg text-white py-2"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default PersonalInfo;
