import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { addToDb } from "../store/middlewares/modifyData"
import { connect } from "react-redux"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: 0,
  },
  media: {
    height: 140,
  },
  description: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 4,
    wordBreak: "break-all",
    overflow: "hidden"
  }
});

const SpotInfoCard = ({ name, about, hobby, id: _id, _addToDb }) => {
  const classes = useStyles();

  const addFavorite = () => {
    console.log("adddddddddddddddddd")
    const spotInfo = {
      hobby,
      _id
    }
    console.log("spotInfo", spotInfo)
    _addToDb(spotInfo)
  }


  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {hobby}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.description}>{about}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={addFavorite}>
          <img src="https://img.icons8.com/windows/32/000000/window-favorite.png" />
        </Button>
        <Button size="small" color="primary">
          <img src="https://img.icons8.com/windows/32/000000/delete-forever.png" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default connect(
  null,
  (dispatch) => ({
    _addToDb: (addSpot) => dispatch(addToDb(addSpot))
  }))(SpotInfoCard);
