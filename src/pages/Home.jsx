import React from "react";
import InputBox from "../components/InputBox";

const Home = () => {
  return (
    <>
      <InputBox
        placeholder="Enter the hackar name"
        type="text"
        style="border-gray-700 font-medium text-lg  border  mx-auto px-4 text-gray-800 "
      />
    </>
  );
};

export default Home;
