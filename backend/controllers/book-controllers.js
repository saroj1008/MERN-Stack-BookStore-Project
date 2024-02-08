const Book = require('../models/Books');

// get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        if (!books) {
            return res.status(404).json({ success: false, message: "Book Not Found" });
        }

        return res.status(200).json(books);
        // return res.status(200).json({ success: true, data: books });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// get books by Id
const getBookById = async (req, res) => {
    try {
        const id = req.params.bookId;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ success: false, message: "Book Not Found" });
        }
        return res.status(200).json(book);
        // return res.status(200).json({ success: true, data: book });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


// create book/ add book
const createBook = async (req, res) => {
    const newBook = req.body;
    // const newBook ={...req.body, priceHistory:[req.body.priceHistory], quantityHistory: [req.body.quantityHistory] } // modifying priceHistory to array.
    try {
        const book = new Book(newBook); 
        await book.save();
        return res.status(201).json({ success: true, message: "Book created successfully", data: book });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};


const updateBook = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const { title, category, author, description, isbn, image, price, quantity } = req.body;

        // Use findById to find the book by ID
        const book = await Book.findById(bookId);

        if (!book) {
            return res.status(404).json({ success: false, message: 'Book not found' });
        }

        // Update the book properties
        book.title = title;
        book.category = category;
        book.author = author;
        book.description = description;
        book.isbn = isbn;
        book.image = image;
        book.price = price;
        book.quantity = quantity;

        // Save the updated book
        const updatedBook = await book.save();
     

        return res.status(200).json({ success: true, message: 'Book updated successfully', data: updatedBook});
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};



const deleteBook = async (req, res) => {
    try {
        const id = req.params.bookId;
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        return res.status(200).json({ success: true, message: "Book deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};



module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}