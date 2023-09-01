import React from "react";
import Banner from "../../components/Banner";
import Products from "../../components/Products";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Banner />
        <Products />
      </div>
    </div>
  );
};

export default Home;
