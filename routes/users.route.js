import express from "express";
const router = express.Router();

import userController, { getUsers, createUser } from "../controllers/user.controller.js";

router.get('/', getUsers);
router.post('/', createUser)
router.get('/:id', userController.details);


export default router;