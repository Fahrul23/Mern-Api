const express = require('express');
const router = express.Router();
const {body} = require('express-validator');

const blogController = require('../controllers/blog');
// [POST] : /v1/blog/post
router.post('/post', [
    body('title').isLength({min:5}).withMessage('Input title tidak valid'),
    body('body').isLength({min:5}).withMessage('Input body tidak valid')],
    blogController.createBlogPost);

router.get('/posts',blogController.getAllBlogPost);
router.get('/post/:postId',blogController.getBlogPostById);
router.put('/post/:postId',[
    body('title').isLength({min:5}).withMessage('Input title tidak valid'),
    body('body').isLength({min:5}).withMessage('Input body tidak valid')],
    blogController.updateBlogPost);
    
module.exports = router;