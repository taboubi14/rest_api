// express Route module
const express = require("express");

// Route
const Route = express.Router();

// User Schema
const User = require("../models/User");

// @desc all http methods ( REST API )
// @access Pubic

Route.get("/getUsers", async (req, res) => {
    try {
        await User.find({}, (err, data) => {
            if (err) throw err;
            else res.status(200).json({ message: " All Data : ", data });
            console.log("GET REQUEST");
        });
    } catch (err) {
        console.log("http method error : GET");
        res.status(401).json({ message: " GET error !!! " });
    }
});

Route.post("/addPost", async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        User.create({ firstName, lastName, email, password }, (err, data) => {
            if (err) throw err;
            else
                res.status(200).json({
                    message: "USER ADDED SUCCESSFULY",
                    data: data,
                });
            console.log("POST REQUEST");
        });
    } catch (err) {
        console.log("http method error : POST", err);
        res.status(401).json({ message: " POST error !!! " });
    }
});

Route.put("/updateUser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        User.findByIdAndUpdate(id, { ...req.body }, (err, data) => {
            if (err) throw err;
            else
                res.status(200).json({
                    message: " USER UPDATED SUCCESSFULY ",
                    data,
                });
            console.log("PUT REQUEST");
        });
    } catch (err) {
        console.log("http method error : PUT", err);
        res.status(401).json({ message: " PUT error !!! " });
    }
});

Route.delete("/deleteUser/:id", async (req, res) => {
    try {
        const { id } = req.params;
        User.findByIdAndDelete(id, (err, data) => {
            if (err) throw err;
            else
                res.status(200).json({
                    message: "USER DELETED SUCCESSFULY",
                    data,
                });
            console.log("DELETE REQUEST");
        });
    } catch (err) {
        console.log("http method error : DELETE", err);
        res.status(401).json({ message: " DELETE error !!! " });
    }
});

module.exports = Route;