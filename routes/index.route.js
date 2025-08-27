import express from "express";
const router = express.Router();

import userRoute from "./users.route.js";
import productRoute from "./products.route.js";

// Route-level middleware
function checkAuth(req, res, next) {
    console.log("Auth check middleware executed.");
    next();
}

function productCheck(req, res, next) {
    console.log("Product check middleware executed.");
    next();
}

router.get('/', (req, res) => {
    res.send('API called...');
});

// with route-level middleware
router.use('/user', checkAuth, userRoute);

// with multiple middlewares
router.use('/product', [checkAuth, productCheck], productRoute);

export default router;