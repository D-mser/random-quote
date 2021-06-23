import React, { useState, useEffect } from "react";
import SimpleCard from "./SimpleCard";
import Quote from "./Quote";
import randomcolor from "randomcolor";

export default function CardHolder(props) {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState("#d0f0c0");
  const [textColor, setTextColor] = useState("black");

  function handleNextQuote() {
    setIndex(Math.floor(Math.random() * props.data.data.quotes.length));
  }

  function lightOrDark(color) {
    var r, g, b, hsp;

    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;

    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {
      return "light";
    } else {
      return "dark";
    }
  }

  useEffect(() => {
    const randColor = randomcolor();
    setColor(randColor);
    setTextColor(lightOrDark(randColor) === "light" ? "black" : "white");
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
          textColor={textColor}
        >
          {({ quote, textColor }) => (
            <Quote quote={quote} textColor={textColor} />
          )}
        </SimpleCard>
      </>
    );
  }
}
