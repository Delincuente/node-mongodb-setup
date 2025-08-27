import express from "express";
const router = express.Router();

import userController from "../controllers/user.controller.js";

router.get('/', userController.userController);
router.get('/:id', userController.details);


export default router;