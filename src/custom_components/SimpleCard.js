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
  box: {
    transform: "translate(-50%,-50%)",
    width: "50%",
    heigth: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  return (
    <Box
      component="div"
      minHeight="100vh"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <Box className={classes.box}>
        <Card className={classes.root} style={{ backgroundColor: props.color }}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              style={{ color: props.textColor }}
            >
              Quote of the Day
            </Typography>
            {props.children(props)}
          </CardContent>
          <CardActions>
            <Button
              size="small"
              endIcon={<FormatQuoteIcon />}
              onClick={() => {
                props.nextQuote();
              }}
              style={{ color: props.textColor }}
            >
              Next quote
            </Button>
            <Button
              size="small"
              startIcon={<TwitterIcon />}
              href="https://twitter.com/intent/tweet"
              style={{ color: props.textColor }}
            >
              Tweet
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}
