import { assistanceItems } from "@/constant/data";
import { Link } from "react-router-dom";
import Card from "./Card";

const AccountAssistance = () => {
  return (
    <section className="mt-16">
      <h3 className="font-medium text-[40px] text-center">Need assistance?</h3>
      <div className="mt-9 mb-10 grid gap-8 h-60 sm:grid-cols-3 justify-between w-full">
        {assistanceItems.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
      <Link to="/" className="flex justify-center underline text-xl">
        Or visit our knowledge base
      </Link>
    </section>
  );
};

export default AccountAssistance;
