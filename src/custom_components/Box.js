import React from "react";
import Quote from "./Quote";
import Icon from "./Icon";
import Card from "react-bootstrap/Card";

const SOURCE =
  "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      quotes: [],
      error: null,
      index: 0,
    };
    this.handleNextQuote = this.handleNextQuote.bind(this);
  }

  handleNextQuote() {
    this.setState((state) => ({
      index: Math.floor(Math.random() * state.quotes.length),
    }));
  }

  componentDidMount() {
    fetch(SOURCE)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            quotes: result.quotes,
            index: Math.floor(Math.random() * result.quotes.length),
          });
        },
        (error) => {
          this.setState({
            error: null,
            isLoaded: true,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, quotes, index } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="quote-box">
          <Card border="info" style={{ width: "50vw" }}>
            <Card.Header>
              <Card.Link href="https://twitter.com/intent/tweet">
                <Icon icon="twitter" />
              </Card.Link>
            </Card.Header>
            <Card.Body>
              <Quote
                quote={quotes[index]}
                handleNextQuote={this.handleNextQuote}
              />
            </Card.Body>
          </Card>
        </div>
      );
    }
  }
}

export default Box;
