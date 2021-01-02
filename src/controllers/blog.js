
const { validationResult } = require('express-validator');

exports.createBlogPost = (req,res,next)=>{
    const title = req.body.title;
    const body = req.body.body;

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const err = new Error('input value tidak sesuai');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }


    const result ={
        message : 'Create Blog Post Success',
        data : {
            post_id : 1,
            title : "Title Blog",
            image: "image.png",
            body : "lore ipsum is simple text of the",
            created_At :"12/06/2002",
            author:{
                uid:1,
                name:"Fahrul"
            }
        }
    }
    
    res.status(201).json(result);

}