const mongoose = require("mongoose")

function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
}


const shortenerSchema = mongoose.Schema({
    long_url: {
        type: String,
        required: [true, "URL is required for shortening"],
        unique: true,
        validate: [isUrlValid, "An Instance must have a valid URL"]
    },
    short_url: {
        type: String,
        default: "short"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    timesFollowed: {
        type: Number,
        default: 0
    }
})

const Shortener = mongoose.model("Shortener", shortenerSchema)

module.exports = Shortener