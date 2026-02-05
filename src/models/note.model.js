const mongoose = require("mongoose");

// crete note-schema
const notesSchema = new mongoose.Schema({
    title: String,
    description: String,
})

// create note-model
const noteModel = mongoose.model("note", notesSchema);


// export note-models models
module.exports = noteModel