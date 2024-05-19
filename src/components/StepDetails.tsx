import React from "react";
import { StepDetailsProps } from "@/types/setupProcess";

const StepDetails: React.FC<StepDetailsProps> = ({
  stepNumber,
  title,
  description,
}) => {
  return (
    <div className="step-details">
      <h2>Step {stepNumber}: {title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default StepDetails;