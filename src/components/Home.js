import React from "react";
import { Hero } from "./Hero";
import { QuoteCard } from "./QuoteCard";

const Home = () => {
  return (
    <>
      <div className="container">
        <Hero />
      </div>
      <div className="row justify-content-md-center">
        <QuoteCard />
      </div>
    </>
  );
};

export { Home };
