import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

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
        overflow: "hidden",
    },
});

const SpotInfoCard = ({ name, about, hobby, id, setState, state }) => {
    const classes = useStyles();

    const addToDB = async () => {
        console.log("add to db clicked");
        const resOne = await axios
            .put("http://localhost:3000/api/fav/add", {
                hobby,
                _id: id,
            })


        const resTwo = await axios
            .put("http://localhost:3000/api/spots/add", {
                hobby,
                _id: id,
                choosefav: true
            })

        axios.all([resOne, resTwo]).then(
            axios.spread((...responses) => {
                const dbFav = responses[0].data;
                const dbSpot = responses[1].data;

                console.log("respOne", dbFav);
                console.log("respTwo", dbSpot);

                setState({
                    ...state,
                    dbFavs: dbFav,
                    dbSpots: dbSpot,

                })
            })
        );

    };

    const removeFromDB = () => {
        console.log("remove from db clicked");
        axios
            .put("http://localhost:3000/api/fav/remove", {
                hobby,
                _id: id,
            })
            .then((res) => console.log("remove from favs success")).catch(err => console.log("remove from fav fail", err))

        axios
            .put("http://localhost:3000/api/spots/remove", {
                hobby,
                _id: id,
                choosefav: false
            })
            .then((res) => console.log("remove from spots success")).catch(err => console.log("remove to spots fail", err))
    };

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
                <Button size="small" color="primary" onClick={addToDB}>
                    <img src="https://img.icons8.com/windows/32/000000/window-favorite.png" />
                </Button>
                <Button size="small" color="primary" onClick={removeFromDB}>
                    <img src="https://img.icons8.com/windows/32/000000/delete-forever.png" />
                </Button>
            </CardActions>
        </Card>
    );
}
    ;

export default SpotInfoCard;
