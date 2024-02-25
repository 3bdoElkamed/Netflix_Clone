import React, { Fragment } from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Row from "../components/Row";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <section className="mt-5">
        <Row id="1" section="UpComing" />
        <Row id="2" section="Popular" />
        <Row id="3" section="Trending" />
        <Row id="4" section="TopRated" />
      </section>
    </>
  );
};

export default Home;
