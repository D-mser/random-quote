import React, { useState, useEffect } from "react";
import SimpleCard from "./SimpleCard";
import Quote from "./Quote";
import randomcolor from "randomcolor";

export default function CardHolder(props) {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState("#d0f0c0");

  function handleNextQuote() {
    setIndex(Math.floor(Math.random() * props.data.data.quotes.length));
  }

  useEffect(() => {
    setColor(randomcolor());
  }, [index]);

  const { error, loading } = props.status;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    const quotes = props.data.data.quotes;

    return (
      <>
        <SimpleCard
          quote={quotes[index]}
          nextQuote={handleNextQuote}
          color={color}
        >
          {(quote) => <Quote quote={quote} />}
        </SimpleCard>
      </>
    );
  }
}
