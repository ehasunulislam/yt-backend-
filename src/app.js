const express = require("express");
const noteModel = require("./models/note.model");
const app = express();

/* middleware start */
app.use(express.json());
/* middleware end */



/* all the API writing start */
app.post("/notes", async(req, res) => {
    const data = req.body;

    await noteModel.create({
        title: data.title,
        description: data.description,
    });

    res.status(201).json({
        message: "Note created"
    })
})
/* all the API writing end */


module.exports = app;