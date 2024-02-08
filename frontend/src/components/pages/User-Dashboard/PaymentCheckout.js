
import React, { useContext, useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import apiServiceUser from '../../../services/apiServiceUser';
import LoggedInUserContext from '../../../context-global/LoggedInUserContext';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate, useOutletContext } from 'react-router-dom';

const PaymentCheckout = () => {
  const [cartBooks, setCartBooks] = useState([]);
  const navigate = useNavigate();
  const { cartLength, setCartLength } = useOutletContext();

  useEffect(() => {
    fetchCartItems();
  }, []);

  const { loggedInUser } = useContext(LoggedInUserContext);

  // fetch cart items:
  async function fetchCartItems() {
    try {
      const response = await apiServiceUser.fetchCart(loggedInUser._id);
      setCartBooks(response);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  }

  const getTotalSum = () => {
    const total = cartBooks.reduce((total, product) => total + product.count * product.price, 0);
    // Round the total to two decimal places
    const roundedTotal = parseFloat(total.toFixed(2));
    return roundedTotal;
  };


  const makePayment = (token) => {
    const body = {
      token,
      product: {
        name: 'Book Items in the cart',
        price: getTotalSum(),
        productBy: 'Book Store',
      },
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    return fetch('http://localhost:4000/payment', {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log('Response', response);
        const { status } = response;
        console.log('STATUS', status);
        // You can handle the success or failure of the payment here and show appropriate messages to the user.
        if (status === 200) {
          apiServiceUser.cartCheckOut(loggedInUser._id);
          setCartBooks([]); // empty the cart when check out is done
          setCartLength(0);
          console.log('Payment success');
          navigate('/user');
          alert(`Payment Success of amount ${getTotalSum()}`);
        } else {
          console.log('Payment failed');
          navigate('/user/cart');
        }
      })
      .catch((err) => {
        console.error('Payment error:', err);
      });

  };

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Make a Secure Payment
          </Typography>
          <Typography color="textSecondary">
            Total Amount: ${getTotalSum()}
          </Typography>
          <StripeCheckout
            stripeKey="pk_test_51NZREUAhS6KsJHMYwsfY36YmullV7BuEFXSuACnLwld9Xr5kn9ivE9fXkpsEokdfaGxjOAtuaEXbSns6IgMAlAiB00JX3GCEJc" // Replace this with your actual publishable key
            token={makePayment}
            name="Buy Books"
            amount={getTotalSum() * 100} // Stripe requires the price in cents
            currency="USD" // Replace with your preferred currency
          >
            <Button variant="contained" color="primary">
              Pay ${getTotalSum()}
            </Button>
          </StripeCheckout>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentCheckout;



/* 
// working code
import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const PaymentCheckout = () => {
  const [product] = useState({
    name: 'React from FB',
    price: 10,
    productBy: 'Facebook',
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    const headers = {
      'Content-Type': 'application/json',
    };

    return fetch('http://localhost:4000/payment', { // Replace this with your server URL where the API endpoint is handled
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log('Response', response);
        const { status } = response;
        console.log('STATUS', status);
        // You can handle the success or failure of the payment here and show appropriate messages to the user.
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      PaymentCheckout
      <StripeCheckout
        stripeKey="pk_test_51NZREUAhS6KsJHMYwsfY36YmullV7BuEFXSuACnLwld9Xr5kn9ivE9fXkpsEokdfaGxjOAtuaEXbSns6IgMAlAiB00JX3GCEJc" // Replace this with your actual publishable key
        token={makePayment}
        name="Buy React"
        amount={product.price * 100} // Stripe requires the price in cents
        currency="USD" // Replace with your preferred currency
      >
        <button>Buy react in 10 minutes for ${product.price}</button>
      </StripeCheckout>
    </div>
  );
};

export default PaymentCheckout;


*/