const mongoose = require('mongoose');

const MoviesSchema = new mongoose.Schema (
    {
        MovieName:{type: String,required:true},
        Rating:{type: Number,required:true},
        cast:[{type: String,required:true}],
        Genre:{type:String,required:true},
        ReleaseDate:{type:Date,required:true}
    },
    {
        timestamps:false,
        versionKey:false
    }
);

module.exports = mongoose.model('Movies',MoviesSchema)
// a. Movie Name - (String)
// b. Rating - (Number)
// c. Cast - (Array)
// d. Genre - (String)
// e. Release Date - (Datetime)