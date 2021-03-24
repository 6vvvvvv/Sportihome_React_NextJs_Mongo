import { A } from "../constant";

export const addFav = (addSpot) => ({
    type: A.ADD_FAV,
    addSpot,
});

export const removeFav = (removeSpot) => ({
    type: A.REMOVE_FAV,
    removeSpot,
});

export const saveSpots = (spots) => ({
    type: A.SAVE_SPOTS,
    spots,
});
