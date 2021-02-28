const mongoose =require('mongoose')
let vaccineSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    Latitude:Number,
    Longitude:Number,
    Positive:String,
    Negative:String,
    Mixed:String,
    Neutral:String,
    Count:Number,
    Sentiment:String


})

module.exports = mongoose.model('vaccine',vaccineSchema);