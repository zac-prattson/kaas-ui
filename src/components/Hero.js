import React from "react";

const Hero = () => {
  return (
    <>
      <div className="jumbotron mt-3">
        <h1 className="display-6">Ye Quotes</h1>
        <p className="lead">Random Kayne West quotes at your service</p>
        <hr className="my-4" />
        <p>
          React application that uses a Flask API deployed with Zappa on AWS
          Lambda to serve Kanye West quotes from{" "}
          <a href="https://kanye.rest/">Kayne REST API</a>.
        </p>
      </div>
    </>
  );
};

export { Hero };
