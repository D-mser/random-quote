import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Quote(props) {
  return (
    <>
      <Typography variant="h5" component="h5" color="textPrimary">
        "{props.quote.quote}"
      </Typography>
      <Typography variant="subtitle1" component="p" color="textSecondary">
        {props.quote.author}
      </Typography>
    </>
  );
}
