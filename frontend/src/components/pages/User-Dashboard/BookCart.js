import React, { useContext, useEffect, useState } from 'react';
import { Button, Avatar, Grid, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LoggedInUserContext from '../../../context-global/LoggedInUserContext';
import apiServiceUser from '../../../services/apiServiceUser';
import ProductOrderHistory from './ProductOrderHistory';
import { useNavigate, useOutletContext } from 'react-router-dom';

const BookCart = () => {
    const [cartBooks, setCartBooks] = useState([]);
    const [cart, setCart] = useState([]);
    const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
    const { cartLength, setCartLength } = useOutletContext();
    const navigate = useNavigate();

    useEffect(() => {
        fetchCartItems();
    }, []);

    // fetch cart items:
    async function fetchCartItems() {
        const response = await apiServiceUser.fetchCart(loggedInUser._id);
        setCartBooks(response);
        // setCart(response.map((product) => ({ ...product, count: 1 }))); // Initialize count to 1 for all items
        setCart(response);
    }

    const handleIncreaseCount = async (productId) => {
        await apiServiceUser.increaseCountByCountId(loggedInUser._id, productId);
        console.log("prouct", productId);
        setCart((prevCart) =>
            prevCart.map((product) =>
                product._id === productId ? { ...product, count: product.count + 1 } : product
            )
        );
    };

    const handleDecreaseCount = async (productId) => {
        await apiServiceUser.decreaseCountByCountId(loggedInUser._id, productId);
        setCart((prevCart) =>
            prevCart.map((product) =>
                product._id === productId ? { ...product, count: Math.max(1, product.count - 1) } : product
            )
        );
    };

    const handleRemoveFromCart = async (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product._id !== productId));
        await apiServiceUser.deleteCartProduct(loggedInUser._id, productId);
        setCartLength(cartLength - 1);
    };

    const getTotalSum = () => {
        return cart.reduce((total, product) => total + product.count * product.price, 0);
    };

    const handleCheckout = async () => {
        // Implement the checkout functionality here, e.g., redirect to a checkout page or process the order.
        // const response = await apiServiceUser.cartCheckOut(loggedInUser._id);
        // setCart([]); // empty the cart when check out is done
        navigate('/user/payment');
    };

    const handleContinueShopping = () => {
        navigate('/user');
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '50%' }}>
                    {cart.length === 0 ? (
                        <Card style={{ textAlign: 'center', padding: '20px' }}>
                            <CardContent>
                                <Typography variant="h5">No items in cart</Typography>
                                <Typography variant="body1">Add some items to your cart to see them here.</Typography>
                                <Button sx={{ backgroundColor: "skyblue" }} onClick={handleContinueShopping}>Continue Shopping</Button>
                            </CardContent>
                        </Card>
                    ) : (

                        <div>
                            {cart.map((product) => (
                                <Card key={product._id} style={{ display: 'flex', marginBottom: '10px' }}>
                                    <CardActionArea sx={{ display: "flex" }}>
                                        <CardMedia component="img" image={product.image} alt={product.title} style={{ width: '150px' }} />
                                        <CardContent style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                                            <div style={{ flexGrow: 1 }}>
                                                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>{product.title}</Typography>
                                                <div>
                                                    <Button onClick={() => handleDecreaseCount(product._id)} disabled={product.count === 1}>
                                                        <RemoveIcon />
                                                    </Button>
                                                    <span style={{ margin: '0 5px' }}>{product.count}</span>
                                                    <Button onClick={() => handleIncreaseCount(product._id)}>
                                                        <AddIcon />
                                                    </Button>
                                                </div>
                                                <Typography variant="subtitle1">Rate: {product.price}</Typography>
                                                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                                                    Price: {product.count * product.price}
                                                </Typography>
                                            </div>
                                            <div>
                                                <Button variant="contained" color="secondary" onClick={() => handleRemoveFromCart(product._id)}>
                                                    X
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ))}

                        </div>
                    )}
                </div>
                <div style={{ width: "30%", marginLeft: '20px' }} >
                    {cart.length > 0 &&
                        <Card style={{ padding: '16px' }}>
                            <Typography variant="h6">Total: {parseFloat(getTotalSum().toFixed(2))}</Typography>
                            <Button
                                variant="contained"
                                style={{ backgroundColor: 'green', color: '#fff', marginTop: '20px' }}
                                onClick={handleCheckout}
                            >
                                Check Out
                            </Button>
                        </Card>}
                </div>
            </div>
            <hr></hr>
            <ProductOrderHistory />
        </div>
    );
};

export default BookCart;
