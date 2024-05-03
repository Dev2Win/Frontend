import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Interests from "./Interests";
import EducationBackground from "./EducationBackground";

const Mentee: React.FC = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState<number>(1);

  const handleNext = (data: any) => {
    setFormData((prevData: any) => ({ ...prevData, ...data }));
    setStep((prevStep: number) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep: number) => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo onNext={handleNext} />;
      case 2:
        return (
          <Interests
            formData={formData}
            onNext={handleNext}
            onPrev={handleBack}
          />
        );
      case 3:
        return <EducationBackground formData={formData} onPrev={handleBack} />;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Mentee;
