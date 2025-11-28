//Here we are connecting to my MongoAtlas database.
let mongoose = require("mongoose");

// Create a model

let bookModel = mongoose.Schema(
    {
    name: String,
    course: String,
    year: Number,
    difficulties: String,
    },
    {
        collection:"tutoring4"
    }
);
module.exports=mongoose.model('Book',bookModel);