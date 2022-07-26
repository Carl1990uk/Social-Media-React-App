const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); //fix issues with json data (insomnia)
app.use(cors());

const db = require('./models');

//Routers using express
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() =>{
    app.listen(3006, () => {
        console.log("Server running on port 3006");
    });
});



