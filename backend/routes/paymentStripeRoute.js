const express = require('express');
const router = express.Router();
const stripe = require('stripe')("sk_test_51NZREUAhS6KsJHMY5GWeluYh10dAv0xYXeW5tLZkvLJX75lQ8z9DpOZv7Q6rtsjJU1vOtCP37JFgHHet7y8asnWy00Jtzwy8CV");
const { v4: uuid } = require('uuid');

router.post('/', async (req, res) => {
    const { token, product } = req.body;
    console.log("token", token);
    console.log("product", product);

    try {
      // Make the charge request to Stripe
      const charge = await stripe.charges.create({
        source: token.id,
        amount: product.price * 100, // Stripe requires the price in cents
        currency: 'USD', // Replace with your preferred currency
        description: `Purchase of ${product.name}`,
      });
  
      // Handle the success or failure of the payment here and send an appropriate response to the frontend
      res.status(200).json({ message: 'Payment successful!', charge });
    } catch (err) {
      console.log('Stripe API Error:', err);
      res.status(500).json({ error: 'Payment failed!' });
    }
  });
  
  module.exports = router;

