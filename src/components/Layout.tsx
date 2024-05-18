import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={`ml-auto max-w-[100rem] 2xl:ml-72 w-full`}>
        <main className="mt-[88px]">{children}</main>
      </div>
    </>
  );
};

export default Layout;
