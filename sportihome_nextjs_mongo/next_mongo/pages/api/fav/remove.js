import dbConnect from "../../../utils/dbConnect";
import Fav from "../../../models/Fav";

dbConnect();

export default async (req, res) => {
    const { method } = req;

    try {
        if (method === "PUT") {
            const response = await Fav.updateOne(
                {
                    sport: req.body.hobby
                },
                {
                    $pull: {
                        favs: req.body._id
                    },
                }
            );

            if (response) {
                const updatedResult = await Fav.find({});
                console.log("remove fav updatedResult", updatedResult);
                res.json({ data: updatedResult });
            }

        }
    } catch (error) {
        res.status(400).json({ success: false });
    }
};



