const mongoose = require("mongoose");

const FavSchema = new mongoose.Schema({
    sport: {
        type: String,
        required: true,
    },
    favs: {
        type: Array,
        default: []
    }
});

// export model user with SportSchema
module.exports = mongoose.models.Fav || mongoose.model("Fav", FavSchema);
