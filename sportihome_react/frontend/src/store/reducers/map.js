import { A } from "../constant"

const initialState = {

}

//TODO:
const map = (state = initialState, action) => {
    switch (action.type) {


        case A.ADD_FAV:
            return { ...state, favs: [...state.favs, action.addSpot] }

        // case A.REMOVE_FAV:

        //     const newFavs = state.favs.reduce((acc, cur) => {
        //         return cur === action.removeSpot ? [...acc] : [...acc, cur]
        //     }, [])

        //     return { ...state, favs: [...newFavs] }

        // case A.SAVE_SPOTS:
        //     return { ...state,...action.spots}

        default:
            return state
    }
}

export default map