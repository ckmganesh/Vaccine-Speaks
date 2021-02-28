 const mongoose = require('mongoose')
const postSchema = mongoose.Schema({
    Latitude:{
        type:Number,
        required:true
    },
    Longitude:{
        type:Number,
        required:true
    },
    Positive:{
        type:String,
        required:true
    },
    Negative:{
        type:String,
        required:true

    },
    Mixed:{
        type:String,
        required:true
    },
    Neutral:{
        type:String,
        required:true
    },
    Count:{
        type:Number,
        required:true
    },
    Sentiment:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Posts',postSchema);