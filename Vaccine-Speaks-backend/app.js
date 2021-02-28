const express = require('express');
const mongoose = require('mongoose');
const app = express();
const postsRoute = require('./routes/posts');
const vaccinRoute = require('./routes/vaccin');
const vaccine = require("./vaccine")
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use('/posts',postsRoute);
app.use('/vaccin',vaccinRoute);


app.get('/',(req,res) => {
    res.send('Home page');
});

// app.get('/posts',(req,res) => {
//     res.send('Posts page');
// });

//const url = "mongodb+srv://avenger:qWXWhAxJyX0b3VV8@cluster0.gxstw.mongodb.net/vaccinespeak?retryWrites=true&w=majority"
const url = "mongodb://localhost:27017/speakvaccine"
mongoose.connect(url,
    {useNewUrlParser : true,useUnifiedTopology :true},()=>{
    console.log("DB connected")

});

const data={
    Latitude:25,
Longitude:-99,
Positive:"0.079604938",
Negative:"0.452194527",
Mixed:"0.116498304",
Neutral:"0.351702288",
Count:2,
Sentiment:"NEGATIVE"
}
 new vaccine(data).save()

vaccine.find({},function(err,vaccines){
    if(err) console.log(err)
    console.log(vaccines)
});

app.listen(3005);