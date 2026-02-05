const mongoose = require("mongoose");


async function connectDB() {
    await mongoose.connect("mongodb+srv://pingup:m4X0OYZC4703YicR@ic-cluster.qdhi4wp.mongodb.net/halley");

    console.log("connected to db");
}

module.exports = connectDB