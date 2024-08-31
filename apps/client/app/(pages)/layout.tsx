import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
