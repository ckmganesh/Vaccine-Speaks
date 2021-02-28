const express=require("express");
const router= express.Router();
const Post = require("../models/Post");




router.get('/',(req,res) => {
    res.send("On Posts")
});

router.get('/specific',(req,res) => {
    console.log("Check for 25 -99");
    Post.find({})
    .exec(function(err,result){
        if(err){
            console.log("Error retrieving");
        }
        else{
            res.json(result);
        }
    })
});

router.post('/',(req,res)=>{
    console.log(req.body)
})

module.exports = router;