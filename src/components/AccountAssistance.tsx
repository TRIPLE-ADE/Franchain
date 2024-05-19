import { Link } from "react-router-dom";

const AccountAssistance = () => {
  return (
    <section className="mt-16">
      <h3 className="font-medium text-[40px] text-center">Need assistance?</h3>
      <div className="mt-9"></div>
      <Link to="/" className="text-center underline text-xl">
        Or visit our knowledge base
      </Link>
    </section>
  );
};

export default AccountAssistance;
