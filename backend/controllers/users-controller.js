// const BookModel = require('../models/bookModel');
// const Book = require('../models/Book');
const { ObjectId } = require('mongodb');
const User = require('../models/Users');

// get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            return res.status(404).json({ success: false, message: "User Not Found" });
        }
        return res.status(200).json(users);
        // return res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// get book by Id
// const getBookById = async (req, res) => {
//     try {
//         const id = req.params.bookId;
//         const user = await Book.findById(id);
//         if (!user) {
//             return res.status(404).json({ success: false, message: "Book Not Found" });
//         }
//         return res.status(200).json(user);
//         // return res.status(200).json({ success: true, data: user });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };

const getUserById = async (req, res) => {
    try {
        const id = req.params.userId;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User Not Found" });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


// create user/ add user
const createUser = async (req, res) => {
    try {
        const user = new User(req.body); // Use object destructuring if needed
        await user.save();
        return res.status(201).json({ success: true, message: "User created successfully", data: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


const addToCart = async (req, res) => {
    try {
        const userId = req.params.userId; // get the user id from the URL parameter
        const product = req.body; // the product object to add to the cart
        const bookId = req.body.book;
        // Find the user with the given id
        const user = await User.findById(new ObjectId(userId)); // Use mongoose.Types.ObjectId

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (user.role !== 'user') {
            return res.status(400).send('NOT ALLOWED');
        }

        const existingCartItemIndex = user.cart.findIndex(item => {
            // Add a 'return' statement here to return the result of the comparison
            return item.book.toString() === new ObjectId(bookId).toString();
        });

        console.log(existingCartItemIndex, bookId);

        if (existingCartItemIndex !== -1) {
            // If the book already exists in the cart, increase the count
            user.cart[existingCartItemIndex].count += 1;
        } else {
            // If the book does not exist in the cart, add it to the cart array
            user.cart.push(product);
        }

        await user.save(); // Make sure to use 'await' to wait for the save operation

        return res.status(200).json({ success: true, message: "Successfully saved the cart", data: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


const handleIncreaseCart = async (req, res) => {
    const { userId, cartId } = req.params;

    try {
        const user = await User.findById(new ObjectId(userId));
        if (!user) {
            return res.status(401).json({ status: false, message: "Cannot find user" });
        }

        // Find the cart item with the given cartId
        const existingCartItemIndex = user.cart.findIndex(cartItem => cartId === new ObjectId(cartItem._id).toString());

        if (existingCartItemIndex === -1) {
            return res.status(404).json({ success: false, message: "Cart item not found" });
        }

        // Increase the count of the cart item
        user.cart[existingCartItemIndex].count += 1;

        await user.save(); // Make sure to use 'await' to wait for the save operation

        return res.status(201).json({ success: true, message: "Successfully updated count", data: user.cart });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// handle decrease cart item count
const handleDecreaseCart = async (req, res) => {
    const { userId, cartId } = req.params;

    try {
        const user = await User.findById(new ObjectId(userId));
        if (!user) {
            return res.status(401).json({ status: false, message: "Cannot find user" });
        }

        // Find the cart item with the given cartId
        const existingCartItemIndex = user.cart.findIndex(cartItem => cartId === new ObjectId(cartItem._id).toString());

        if (existingCartItemIndex === -1) {
            return res.status(404).json({ success: false, message: "Cart item not found" });
        }

        // Increase the count of the cart item
        user.cart[existingCartItemIndex].count -= 1;
        // user.cart[existingCartItemIndex].price *= user.cart[existingCartItemIndex].count;
        await user.save(); // Make sure to use 'await' to wait for the save operation

        return res.status(201).json({ success: true, message: "Successfully updated count", data: user.cart });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// // update user 
// const updateBook = async (req, res) => {
//     try {
//         const id = req.params.bookId;
//         const { title, author, description, isbn, price, image, available, language, pages } = req.body;
//         const user = await Book.findByIdAndUpdate(id, { title, author, description, isbn, price, image}, { new: true }); // {new: true} will update all
//         user.save();
//         if (!user) {
//             return res.status(404).json({ success: false, message: "Book not found" });
//         }
//         return res.status(200).json({ success: true, message: "Book updated successfully", data: user });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };

// const deleteBook = async (req, res) => {
//     try {
//         const id = req.params.bookId;
//         const user = await Book.findByIdAndDelete(id);
//         if (!user) {
//             return res.status(404).json({ success: false, message: "Book not found" });
//         }
//         return res.status(200).json({ success: true, message: "Book deleted successfully" });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };
const deleteCartItems = async (req, res) => {
    try {
        const { userId, cartId } = req.params;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const existingCartItemIndex = user.cart.findIndex(cartItem => cartId === new ObjectId(cartItem._id).toString());

        if (existingCartItemIndex === -1) {
            return res.status(404).json({ success: false, message: "Cart item not found" });
        }

        user.cart.splice(existingCartItemIndex, 1);
        await user.save();

        res.status(200).json({ success: true, message: "Cart item deleted successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// get all item in cart history
const getCart = async (req, res) => {
    try {
        const userId = req.params.userId; // get the user id from the URL parameter
        const user = await User.findById(new ObjectId(userId));
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        if (user.role !== 'user') {
            return res.status(400).send('NOT ALLOWED');
        }

        // Add the product to the user's cart

        return res.status(200).json(user.cart);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// place order ** order price update by count is maintain in frontend
const placeOrder = async (req, res) => {
    try {
        const userId = req.params.userId; // get the user id from the URL parameter
        // Find the user with the given id
        const user = await User.findById(new ObjectId(userId));
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (user.role !== 'user') {
            return res.status(400).send('NOT ALLOWED');
        }

        // Create a copy of the cart to add to the order history
        //   const cartCopy = structuredClone(user.cart);
        const order = {
            date: new Date(),
            cart: user.cart
            // cart: cartCopy
        };

        // Push the order to the order history
        user.orderHistory.push(order);

        // Clear the cart
        user.cart = [];

        // Save the user object
        await user.save();
        return res.status(200).json({ success: true, message: "Successfully placed order", data: user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// order history
const getOrderHistory = async (req, res) => {
    try {
        const userId = req.params.userId; // get the user id from the URL parameter
        const user = await User.findById(new ObjectId(userId));
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        if (user.role !== 'user') {
            return res.status(400).send('NOT ALLOWED');
        }

        // Add the product to the user's cart

        return res.status(200).json(user.orderHistory);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// const placeOrder = async (req, res) => {
//     try {
//         const userId = req.params.userId; // get the user id from the URL parameter
//         const products = req.body; // the product object to add to the cart
//         // Find the user with the given id

//         const user = await User.findById(ObjectId(userId));

//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found" });
//         }
//         if (user.role !== 'user') {
//             return res.status(400).send('NOT ALLOWED');
//         }

//         // user.orderHistory.push()
//         // SOME purchase process

//         user.cart = [];
//         user.save();

//         return res.status(200).json({ success: true, message: "Successfully placed order", data: user });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
// };

module.exports = {
    createUser,
    addToCart,
    getAllUsers,
    getCart,
    getUserById,
    deleteCartItems,
    placeOrder,
    getOrderHistory,
    handleDecreaseCart,
    handleIncreaseCart
    /* 
    updateBook,
    deleteBook  */
}
