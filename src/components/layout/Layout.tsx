import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="min-h-">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
