import React from "react";

function Quote(props) {
  return (
    <blockquote className="blockquote mb-0">
      <p>{props.quote.quote}</p>
      <footer className="blockquote-footer">{props.quote.author}</footer>
    </blockquote>
  );
}

export default Quote;
