import { TextField, Box, Button, FormLabel } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import apiService from "../../../services/apiService";
import { ProductContext } from "./ProductContext";
import { useNavigate } from 'react-router-dom';


const ModifyProductForm = () => {
    // const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    const { state, dispatch, mode, setMode, formData, setFormData } = useContext(ProductContext);
  

    // Add/ Create new product
    const addProduct = async (newProduct) => {
        try {
            dispatch({ type: 'SET_LOADING' });
            const response = await apiService.createProduct(newProduct);
            dispatch({ type: 'ADD_PRODUCT', payload: response.data });
            window.history.back();
        } catch (error) {
            console.error('Error adding product:', error);
            dispatch({ type: 'SET_LOADING' });
        }
    }

    const updateProduct = async (updatedProduct) => {
        try {
            dispatch({ type: 'SET_LOADING' });
            const response = await apiService.updateProduct(updatedProduct);
            dispatch({ type: 'UPDATE_PRODUCT', payload: response.data });
            setMode("add");
            navigate('/admin');
            // window.history.back();
        } catch (error) {
            console.error('Error updating product:', error);
            dispatch({ type: 'SET_LOADING' });
        }
    }

    // handle form submit
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here (for Update and Add product)
        mode === "add" ? addProduct(formData) : updateProduct(formData);


    };

    // handle Input
    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // <Button sx={{ backgroundColor: 'skyblue', padding: '16px 32px', marginTop: '10px' }} onClick={addBookPage}>Add Book</Button>
    return (
        <div style={{ marginTop: '60px' }}>
            <form onSubmit={handleSubmit}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    maxWidth={700}
                    alignContent="center"
                    alignSelf="center"
                    marginLeft="auto"
                    marginRight="auto"
                    marginTop={0}
                    marginBottom={0}
                >
                    <h3 style={{ backgroundColor: 'skyblue', padding: '16px 32px' }}>{mode === "add" ? "Add New Book" : "Update Book"}</h3>

                    <Box sx={{ display: "flex", gap: "10px" }}>
                        <div style={{ flexGrow: 1, width: '50%' }}>
                            <FormLabel sx={{ margin: '-5px 0' }}>Title</FormLabel>
                            <TextField value={formData.title} onChange={handleInput} fullWidth variant="outlined" name="title" maxLength={30} />
                        </div>

                        <div style={{ flexGrow: 1, width: '50%' }}>
                            <FormLabel>Category</FormLabel>
                            <TextField value={formData.category} onChange={handleInput} fullWidth variant="outlined" name="category" maxLength={30} />
                        </div>
                    </Box>

                    <Box sx={{ display: "flex", gap: "10px" }}>
                        <div style={{ flexGrow: 1, width: '50%' }}>
                            <FormLabel>Author</FormLabel>
                            <TextField value={formData.author} onChange={handleInput} fullWidth variant="outlined" name="author" maxLength={30} />
                        </div>

                        <div style={{ flexGrow: 1, width: '50%' }}>
                            <FormLabel>ISBN</FormLabel>
                            <TextField value={formData.isbn} onChange={handleInput} fullWidth variant="outlined" name="isbn" maxLength={30} />
                        </div>

                    </Box>

                    <Box sx={{ display: "flex", gap: "10px" }}>
                        <div style={{ flexGrow: 1, width: '50%' }}>
                            <FormLabel>Price</FormLabel>
                            <TextField value={formData.price} onChange={handleInput} fullWidth variant="outlined" type="number" name="price" />
                        </div>

                        <div style={{ flexGrow: 1, width: '50%' }}>
                            <FormLabel>Quantity</FormLabel>
                            <TextField value={formData.quantity} onChange={handleInput} fullWidth variant="outlined" type="number" name="quantity" />
                        </div>
                    </Box>

                    <FormLabel>Description</FormLabel>
                    <TextField multiline rows={2} value={formData.description} onChange={handleInput} fullWidth variant="outlined" name="description" />

                    <FormLabel>Image</FormLabel>
                    <TextField value={formData.image} onChange={handleInput} fullWidth variant="outlined" name="image" />

                    <Button type="submit" variant="contained" >
                        {mode === "add" ? "Add Book" : "Update Book"}
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default ModifyProductForm;
