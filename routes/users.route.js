import express from "express";
const router = express.Router();

import userController, { createUser } from "../controllers/user.controller.js";

router.get('/', userController.userController);
router.post('/', createUser)
router.get('/:id', userController.details);


export default router;