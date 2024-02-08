import React, { createContext, useEffect, useReducer, useState } from 'react'
import productReducer from "./productReducer";
import apiService from '../../../services/apiService';

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [mode, setMode] = useState("add");
    const [state, dispatch] = useReducer(productReducer, { products: [], loading: true });
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        description: '',
        isbn: '',
        price: 0,
        image: '',
        category: '',
        quantity: 0,
    })

    useEffect(() => {
        fetchProductData();
    }, [])

    // Get all product data
    const fetchProductData = async () => {
        try {
            dispatch({ type: 'SET_LOADING' });
            const response = await apiService.fetchProducts();
            dispatch({ type: 'SET_PRODUCTS', payload: response })
        } catch (error) {
            console.error('Error fetching products:', error);
            dispatch({ type: 'SET_LOADING' });
        }
    }


    return (
        <ProductContext.Provider value={{ state, dispatch, mode, setMode, formData, setFormData }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContextProvider, ProductContext };
