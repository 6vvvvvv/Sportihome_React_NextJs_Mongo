const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    hobby: {
        type: String,
        required: true,
    },
    about: String,
    slug: String,
    loc: Object,
    choosefav: {
        type: Boolean,
        default: false
    }
});

// export model user with SpotSchema
module.exports = mongoose.models.Spot || mongoose.model("Spot", SpotSchema);
