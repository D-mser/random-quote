import React, { useState } from "react";
import SimpleCard from "./SimpleCard";
import Quote from "./Quote";

export default function CardHolder(props) {
  const [index, setIndex] = useState(0);

  function handleNextQuote() {
    setIndex(Math.floor(Math.random() * props.data.data.quotes.length));
  }

  const { error, loading } = props.status;

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    const quotes = props.data.data.quotes;

    return (
      <>
        <SimpleCard quote={quotes[index]} nextQuote={handleNextQuote}>
          {(quote) => <Quote quote={quote} />}
        </SimpleCard>
      </>
    );
  }
}
