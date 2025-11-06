"use client";
import Footer from "../../components/Footer";

const FooterTest = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1>Testing Footer in Isolation</h1>
      </div>
      <Footer />
    </div>
  );
};

export default FooterTest;
