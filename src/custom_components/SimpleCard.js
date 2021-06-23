import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  return (
    <Box display="flex" component="div">
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Quote of the Day
          </Typography>
          {props.children(props.quote)}
        </CardContent>
        <CardActions>
          <Button
            size="small"
            endIcon={<FormatQuoteIcon />}
            onClick={() => {
              props.nextQuote();
            }}
          >
            Next quote
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
