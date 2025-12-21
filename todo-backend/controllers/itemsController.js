// External modules
const { validationResult } = require("express-validator");

// Items model
const TodoItem = require('../models/itemsModel');

// Adding an item
exports.createTodoItem = async (req, res, next)=>{
    
    // Validating the item

    const errors = validationResult(req);
    console.log("Errors:\n\n", errors);

    // Validation Error
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array().map(err=>err.msg)});
    }

    // Adding item
    console.log(req.body);
    const { task, date, completed } = req.body;
    // console.log(task, date, completed);
    // console.log(typeof(task), typeof(date), typeof(completed));
    const todoItem = new TodoItem({ task, date, completed });
    console.log("New to-do created");
    console.log(todoItem);
    try{
        console.log("Saving To do");
        await todoItem.save();
        console.log("Saved the to-do");
        res.status(201).json(todoItem);
    }
    catch(err){
        console.table(err);
        console.log("Name of Error:", err.name);
        res.status(500).json({message:"Internal Server Error"});
    }
    // res.status(200).json({message:"Success"});
};

// Read items
exports.getItems = async (req, res, next)=>{
    
    
    try{
        const items = await TodoItem.find();
        console.log(items);
        res.status(201).json(items);
    }
    catch(err){
        console.log("Unable to fetch items");
        res.status(500).json({message:"Internal Server Error"});
    }
};

// Edit item
exports.editItem = async (req, res, next)=>{
    
     // Validating the item

    const errors = validationResult(req);
    console.log("Errors:\n\n", errors);

    // Validation Error
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array().map(err=>err.msg)});
    }
    
    
    try{
        const id = req.params.id;
        const { task, date, completed } = req.body;
        console.log(id);
        console.log(req.body);

        // Finding the item
        const item = await TodoItem.findById(id);

        console.log(item);

        // Updating the item
        item.task = task;
        item.date = date;
        item.completed = completed;

        console.log("Updating the changes...");
        await item.save();
        console.log("Changes updated");

        console.log(item);
        res.status(201).json(item);
    }
    catch(err){

        if(err.name === 'CastError'){
            console.table(err);
            console.log("Invalid id");
            return res.status(400).json({ message: 'Invalid ID' });
        }



        console.log("Unable to fetch items");
        res.status(500).json({message:"Internal Server Error"});
    }
};

// Delete item
exports.deleteItem = async (req, res, next)=>{

    try{
        const id = req.params.id;

        // Finding the item and deleting it
        const item  = await TodoItem.findByIdAndDelete(id);
        res.status(201).json(item);
    }
    catch(err){
        console.log("\n\n", err.name, "\n\n");
        console.table(err);

        
        if(err.name === 'CastError'){
            console.log("Invalid id");
            return res.status(400).json({ message: 'Invalid ID' });
        }

        res.status(500).json({message:"Internal Server Error"});
    }

};