const express = require("express");
const mongoose = require('mongoose');
const stripe = require('stripe')("pk_test_51NYrooSG5DDmMmFLmWSCMmumfnj3XFbIewe9jaowgMi80Nk9YXlk0mBnc492xA7RQzI0aN81Irf8iiYxuHJkeueo00zr2K1YVS");

// Publishable key: pk_test_51NYrooSG5DDmMmFLmWSCMmumfnj3XFbIewe9jaowgMi80Nk9YXlk0mBnc492xA7RQzI0aN81Irf8iiYxuHJkeueo00zr2K1YVS
// Secret key: sk_test_51NYrooSG5DDmMmFLAjy5JtTPNmDUHtO8elpRo3dzXmIvV3wxyOTtYkvIYdrVV7pI6SxnYmOjZf7vaAVk34uhqTuv00Xo3FH8tb
// successful payment: 4242424242424242
// failed payment: 4000000000009995
// requires authentication: 4000002500003155
const bookRoute = require('./routes/book-routes');
const usersRoute = require('./routes/users-routes');
const authRoute = require('./routes/auth-routes');
const paymentStripeRoute = require('./routes/paymentStripeRoute');

const cors = require('cors');

const app = express();
const PORT = 4000;

// esregmi
// 7Stl1IDVtZSSBHVu

// Enable CORS for all routes
app.use(cors());

// const url = 'mongodb+srv://esregmi:QxcxdTpGRT4aPLa5@react-project.0fa2dnf.mongodb.net/BookstoreDB';
const url = 'mongodb+srv://esregmi:7Stl1IDVtZSSBHVu@ecommercedb.1fgdmda.mongodb.net/?retryWrites=true&w=majority';
mongoose.set("strictQuery", false);
const mongoDB = url;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("DB connected...");
}

// middleware
app.use(express.json());

// Router middleware
app.use('/books', bookRoute);
app.use('/users', usersRoute);
// // app.use('/admin',adminRoute);
app.use('/auth', authRoute)
app.use('/payment', paymentStripeRoute);



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});



 //src: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose