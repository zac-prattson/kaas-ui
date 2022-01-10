import React, { useEffect, useState } from "react";
import { usePrevious } from "../services/usePrevious";
import { getQuotes } from "../services/fetch_quotes";
import cardImage from "../assets/kanye_hero.png";

const QuoteCard = () => {
  let [quote, setQuote] = useState("");
  const prevQuote = usePrevious(quote);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    getQuotes()
      .then((res) => {
        const quoteData = res.data.quote;
        setQuote(quoteData);
      })
      .catch((err) => {
        console.log("error while fetching::: ", err);
      });
  };

  const setPreviousQuote = () => {
    setQuote(prevQuote);
  };

  return (
    <>
      <div
        className="card text-center g-0 mt-4 mb-4"
        style={{ width: "30rem" }}
      >
        <img className="card-img-top" src={cardImage} alt="Card image cap" />
        <div className="card-body">
          <figure className="text-center">
            <blockquote className="blockquote">
              <p className="lead">{quote}</p>
            </blockquote>
            <figcaption className="blockquote-footer">Kanye West</figcaption>
          </figure>
        </div>
        <div className="card-footer">
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => fetchQuote()}
            >
              Find Quote
            </button>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto mt-1">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setPreviousQuote()}
            >
              Previous Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { QuoteCard };
