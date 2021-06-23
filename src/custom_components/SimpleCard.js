import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import TwitterIcon from "@material-ui/icons/Twitter";

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
    <Box
      display="flex"
      component="div"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <Card className={classes.root} style={{ backgroundColor: props.color }}>
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
          <Button
            size="small"
            startIcon={<TwitterIcon />}
            href="https://twitter.com/intent/tweet"
          >
            Tweet
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
