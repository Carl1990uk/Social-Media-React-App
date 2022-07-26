const express = require('express');
const app = express();
//app.use(express.json()); //fix issues with json data (insomnia)
const db = require('./models');

//Routers using express
//const postRouter = require("./Posts");
//app.use("/posts", postRouter);

db.sequelize.sync().then(() =>{
    app.listen(3006, () => {
        console.log("Server running on port 3006");
    });
});



