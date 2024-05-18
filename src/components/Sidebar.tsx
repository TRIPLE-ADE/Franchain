import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[289px] py-[60px] top-0 h-full bg-neutral-900 text-white fixed flex flex-col overflow-y-auto side-scrollbar -left-full sm:left-0">
      <Link to="/" className="text-[40px] font-bold pb-[60px] pl-[30px]">
        Franchain
      </Link>
      <ul className="flex flex-col gap-2 mb-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Collections</Link>
        </li>
        <li>
          <Link to="/">Operators</Link>
        </li>
        <li>
          <Link to="/">Locations</Link>
        </li>
      </ul>
      <Link to="/">Settings</Link>
    </div>
  );
};

export default Sidebar;
