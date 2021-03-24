import dbConnect from "../../../utils/dbConnect";
import Spot from "../../../models/Spot";

dbConnect();

export default async (req, res) => {
    const {method} = req;
    console.log("req", req.body)
    try {
        if (method === "PUT") {
            const response = await Spot.updateOne(
                {_id: req.body._id},
                {$set: {choosefav: req.body.choosefav}}
            );

            if (response) {
                const updatedResult = await Spot.find({});
                console.log("remove spot updatedResult", updatedResult);
                res.json({data: updatedResult});
            }
        }
    } catch (error) {
        res.status(400).json({success: false});
    }
};
