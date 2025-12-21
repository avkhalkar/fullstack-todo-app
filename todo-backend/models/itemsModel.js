// External modules
const mongoose = require("mongoose");

// Item-model
const todoitemsSchema = new mongoose.Schema(
    {
        task:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            required:true
        },
        completed:{
            type:Boolean
        },
    },
    {
        timestamps:true
    }
);

// Exporting Item model
module.exports = mongoose.model("TodoItem", todoitemsSchema);