import Fav from "../../../models/Fav";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
    const content = await Fav.find({})

    const sportArrObj = req.body.sportList.map(e => ({ sport: e }))
    // console.log("sportArrObj", sportArrObj)
    // if collection is empty then create
    if (!content.length) {
        Fav.create(sportArrObj, function (err) {
            if (err) {
                console.log("Fav create err", err)
                return
            }
            console.log("Fav create successfully")
        })


    }
};
