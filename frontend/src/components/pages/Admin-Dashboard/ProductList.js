import React, { useContext, useEffect, useState } from 'react';
import apiService from '../../../services/apiService';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Avatar, Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ProductContext } from './ProductContext';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const { state, dispatch, setMode, setFormData, formData } = useContext(ProductContext);
    const navigate = useNavigate();
    const tableContainerStyle = {
        width: '80%',
        margin: 'auto',
        marginTop: '20px',
    };
    // const [productData, setProductData] = useState([]);

    // useEffect(() => {
    //     setProductData(state.products);
    // },[state.products])

    // handle delete product
    const handleDeleteProduct = async (productId) => {
        try {
            dispatch({ type: 'SET_LOADING' });
            await apiService.deleteProduct(productId);
            dispatch({ type: 'DELETE_PRODUCT', payload: productId });
        } catch (error) {
            console.error('Error deleting product:', error);
            dispatch({ type: 'SET_LOADING' });
        }
    };

    // handle edit product
    function handleEditProduct(product) {
        setMode("edit");
        setFormData(product);
        navigate(`edit/${product._id}`);
    };

    const addBookPage =()=> {
        navigate('add');
    }

    return (
        <div style={{marginTop:'60px'}}>
            <Button sx={{ backgroundColor: 'skyblue', padding: '16px 32px', marginTop: '10px' }} onClick={addBookPage}>Add Book</Button>
            <TableContainer component={Paper} style={tableContainerStyle} elevation={3}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>ISBN</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Author</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Stock Unit</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {state.products.map((product) => (
                            <TableRow key={product._id}>
                                <TableCell>
                                    <Avatar alt={product.title} src={product.image}></Avatar>
                                </TableCell>
                                <TableCell>{product.title}</TableCell>
                                <TableCell>{product.isbn}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>{product.author}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.quantity}</TableCell>
                                <TableCell>
                                    {product.quantity > 0 ? (
                                        <span style={{ backgroundColor: "green", padding: "5px 10px", borderRadius: "20px", color: "white" }}>Active</span>
                                    ) : (
                                        <span style={{ backgroundColor: "red", padding: "5px 10px", borderRadius: "20px", color: "white" }}>Sold Out</span>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <IconButton aria-label="Edit" onClick={() => handleEditProduct(product)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label="Delete" onClick={() => handleDeleteProduct(product._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ProductList;
