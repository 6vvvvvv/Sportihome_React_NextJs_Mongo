import { addFav, removeFav, saveSpots } from "../actions/map"
import axios from "axios"


export const addToDb = (obj) => {
    return (dispatch) => {
        console.log("obj", obj);

        axios
            .post(
                "http://localhost:8080/api/add",
                {
                    hobby: obj.hobby,
                    _id: obj._id,
                },
                {
                    headers: {
                        'Access-Control-Allow-Origin': 'http://localhost:8080/api/add',
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((res) => {
                console.log("add_item_toback", res.data);
                // dispatch(addFav(res.data));
            });
    };
};

// export const removeFromDb = (obj) => {
//     return (dispatch) => {
//         console.log("obj", obj);

//         axios
//             .post(
//                 "http://localhost:8080/api/remove",
//                 {
//                     item: obj.item,
//                     email: obj.useremail,
//                 },
//                 {
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 }
//             )
//             .then((res) => {
//                 console.log("remove_item_fromback", res.data);
//                 dispatch(removeFav(res.data));
//             });
//     };
// };

// export const saveAllToDb = (obj) => {
//     return (dispatch) => {
//         console.log("obj", obj);

//         axios
//             .post(
//                 "http://localhost:8080/api/saveall",
//                 {
//                     item: obj.item,
//                     email: obj.useremail,
//                 },
//                 {
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 }
//             )
//             .then((res) => {
//                 console.log("remove_item_fromback", res.data);
//                 dispatch(saveSpots(res.data));
//             });
//     };
// };