import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Quote(props) {
  return (
    <>
      <Typography variant="h4" component="h4" color="textPrimary">
        {props.quote.quote}
      </Typography>
      <Typography variant="h6" component="h6" color="textSecondary">
        {props.quote.author}
      </Typography>
    </>
  );
}
