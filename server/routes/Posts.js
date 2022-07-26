const express = require('express');
const router = express.Router();
const { Posts } = require('../models');

router.get("/", async(req, res) => {
    try{
        const listOfPosts = await Posts.findAll();
        res.json(listOfPosts);
    } catch(error){
        res.send(error)
    }
});

router.post("/", async (req, res) => {
    try{
        const post = req.body;
        await Posts.create(post);
        res.json(post);
    } catch(error){
        res.send(error);
    }
});

module.exports = router;

