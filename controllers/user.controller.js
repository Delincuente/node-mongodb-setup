import User from "../models/User.model.js";

export async function createUser(req, res, next) {
    try {
        const { name, email } = req.body;
        const user = await User.create({ name, email });
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}

function userController(req, res) {
    console.log('inputs:', req.body);
    res.send("Welcome user...");
}

function details(req, res, next) {
    const id = req.params.id;
    console.log(id);
    if (isNaN(id)) {
        const error = new Error("User id must be number");
        error.status = 400;
        return next(error);
    }

    res.status(200).json({ message: `User with ID: ${id}` });
}

export default {
    userController: userController,
    details: details
}