const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users-controller');
const verifyToken = require('../middleware/verifyToken');


router.get("/", usersController.getAllUsers);
router.get("/:userId", usersController.getUserById)
// router.post("/add", usersController.createUser); user or admin will be added from auth routes.
router.get("/:userId/cart", usersController.getCart); //working
router.post("/:userId/cart",verifyToken, usersController.addToCart); // working
router.delete("/:userId/cart/:cartId", verifyToken, usersController.deleteCartItems)
router.post("/:userId/place-order", verifyToken, usersController.placeOrder);
// router.post("/:userId/order-history", usersController.placeOrder);
router.get("/:userId/order-history", usersController.getOrderHistory);
router.post("/:userId/cart/:cartId/decrease", usersController.handleDecreaseCart);// cart id means when item is added to cart it will gives different id for item in cart
router.post("/:userId/cart/:cartId/increase", usersController.handleIncreaseCart);

// router.get("/:bookId", bookController.getBookById);
// router.put("/:bookId", bookController.updateBook);
// router.delete('/:bookId', bookController.deleteBook);

module.exports = router;


