import { useEffect, useState } from "react";

const SetupProcess = ({
  completedSteps,
  totalSteps,
}: {
  completedSteps: number;
  totalSteps: number;
}) => {
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    setProgressPercentage((completedSteps / totalSteps) * 100);
  }, [completedSteps, totalSteps]);
  return (
    <section>
      <div className="flex justify-between items-center bg-white py-10 px-14">
        <p className="text-2xl">Let's get you up and running</p>
        <p className="text-sm">
          {totalSteps - completedSteps}/{totalSteps} steps remaining
        </p>
      </div>
      <div className="bg-zinc-100 h-4 w-full relative">
        <div
          className="bg-indigo-400 h-full transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </section>
  );
};

export default SetupProcess;
