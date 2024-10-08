import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const index = ({ children }): LayoutProps => {
  return <div className="max-w-650 h-auto bg-[#3A4750] p-7 rounded-lg">{children}</div>;
};

export default Layout;
