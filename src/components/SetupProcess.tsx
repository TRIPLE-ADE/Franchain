import { useEffect, useState } from "react";

/**
 * Represents a setup process component.
 * @param completedSteps - The number of completed steps.
 * @param totalSteps - The total number of steps.
 */

const SetupProcess = ({
  completedSteps,
  totalSteps,
}: {
  completedSteps: number;
  totalSteps: number;
}) => {
  /**
   * Represents the progress percentage of the setup process.
   */
  const [progressPercentage, setProgressPercentage] = useState(0);
  /**
   * Handles settings the progress percentage based on the number of completed steps and total steps.
   * Dependencies: completedSteps, totalSteps
   */
  useEffect(() => {
    setProgressPercentage((completedSteps / totalSteps) * 100);
  }, [completedSteps, totalSteps]);
  return (
    <section>
      {/* Render the setup process component */}
      <div className="flex justify-between items-center bg-white py-10 px-14">
        <p className="text-2xl">Let's get you up and running</p>
        <p className="text-sm">
          {totalSteps - completedSteps}/{totalSteps} steps remaining
        </p>
      </div>
      <div className="bg-zinc-100 h-4 w-full relative">
        <div
          role="progressbar"
          aria-valuenow={completedSteps}
          aria-valuemin={0}
          aria-valuemax={totalSteps}
          className="bg-indigo-400 h-full transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </section>
  );
};

export default SetupProcess;
