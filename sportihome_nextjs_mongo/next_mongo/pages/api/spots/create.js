import Spot from "../../../models/Spot";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
    const content = await Spot.find({})

    //if collection is empty then create
    if (!content.length) {
        Spot.create(req.body.result, function (err) {
            if (err) {
                console.log("Spot creat err", err)
                return
            }
            console.log("Spot create successfully")
        })
    }

    res.json({data:content})
};
