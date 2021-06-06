import React from "react";
import Card from "react-bootstrap/Card";
import Quote from "./Quote";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      quotes: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            quotes: result.quotes,
          });
        },
        (error) => {
          this.setState({
            error: null,
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, quotes } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const noQuotes = quotes.length;
      const randomIndex = Math.floor(Math.random() * noQuotes);

      console.log(quotes[randomIndex]);

      return (
        <div id="quote-box">
          <Card>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
              <Quote quote={quotes[randomIndex]} />
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
}

export default Box;
