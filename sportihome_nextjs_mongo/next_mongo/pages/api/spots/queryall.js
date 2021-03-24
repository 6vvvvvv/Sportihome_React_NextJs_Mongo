import Spot from "../../../models/Spot";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
    const {method} = req;

    try {
        if (method === "GET") {
            const content = await Spot.find({})

            res.json({data: content})
        }
    } catch (error) {
        res.status(400).json({success: false});
    }
};

