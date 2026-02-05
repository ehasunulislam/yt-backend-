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
});


app.get("/notes", async(req, res) => {
    const notes = await noteModel.find();

    res.status(201).json({
        message: "all-notes",
        notes: notes
    })
});


app.delete("/notes/:id", async(req, res) => {
    const id = req.params.id;

    await noteModel.findOneAndDelete({
        _id: id,
    });

    res.status(201).json({
        message: "data deleted",
    })
});


app.patch("/notes/:id", async(req, res) => {
    const id = req.params.id;
    const description = req.body.description;

    await noteModel.findOneAndUpdate(
        {_id: id},
        {description: description}
    );

    res.status(200).json({
        message: "updated successfully"
    })
})
/* all the API writing end */


module.exports = app;