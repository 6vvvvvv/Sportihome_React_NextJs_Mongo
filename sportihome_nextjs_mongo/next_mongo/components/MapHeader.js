import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function ButtonAppBar({ userLocation, setState, state }) {
	const classes = useStyles();

	const setUserLocation = () => {
		navigator.geolocation.getCurrentPosition((position) => {
			const setUserLocation = {
				lat: position.coords.latitude,
				long: position.coords.longitude
			};
			const newViewport = {
				height: "100vh",
				width: "100vw",
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				zoom: 10
			};
			setState({
				...state,
				viewport: newViewport,
				userLocation: setUserLocation
			});
		});
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<Button onClick={setUserLocation}>
							<img src="https://img.icons8.com/ultraviolet/40/000000/radar.png" />
						</Button>
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						{
							userLocation
								? (
									<p>
										My Location: lat:{userLocation.lat || 0}, lng:{userLocation.long || 0}
									</p>
								)
								: null
						}
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
