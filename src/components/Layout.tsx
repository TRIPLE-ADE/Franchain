import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Sidebar />
      <div
        className={`ml-auto max-w-[100rem] 2xl:ml-72 w-full sm:w-[calc(100%-289px)]`}
      >
        <main className="mt-[88px]">{children}</main>
      </div>
    </>
  );
};

export default Layout;
