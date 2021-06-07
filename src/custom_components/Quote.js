import React from "react";
import { Button, Card } from "react-bootstrap";

function Quote(props) {
  return (
    <blockquote className="blockquote mb-0">
      <Card.Text>{props.quote.quote}</Card.Text>
      <Card.Text className="blockquote-footer" text="white">
        {props.quote.author}
      </Card.Text>
      <Button onClick={props.handleNextQuote} variant="outline-info">
        Next Quote
      </Button>
    </blockquote>
  );
}

export default Quote;
