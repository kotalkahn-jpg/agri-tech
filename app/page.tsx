"use client";
import Image from "next/image";
import HomePage from "../components/Homepage";


const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content grows to push footer down */}
      <div className="flex-grow">
        <HomePage />
      </div>

     
    </div>
  );
};

export default Page;
