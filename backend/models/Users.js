const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    role: { type: String, required: true, enum: ['admin', 'user'], default: 'user' },
    cart: {
        type: [{
            book: { type: Schema.Types.ObjectId, ref: 'books', required: true }, // existing bookId should be provided here
            count: { type: Number, required: true },
            image: { type: String, required: true },
            isbn: { type: String, required: true },
            price: { type: Number, required: true },
            title: { type: String, required: true }
        }],
        default: []
    },
    orderHistory: { type: Array, default: [] }
});

// Export model
module.exports = mongoose.model("users", UserSchema);

/* 
{
  "firstName": "Saroj",
  "lastName": "Regmi",
  "email": "a@a.com",
  "mobileNumber": "1234567890",
  "password": "a",
  "gender": "male",
  "role": "user",
  "cart": [],
  "orderHistory": []
}
*/