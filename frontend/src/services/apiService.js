const API_URL = "http://localhost:4000/books";

async function sendRequest(url, options) {
    const response = await fetch(url, options);
    return await response.json();
}

function createRequestOptions(method, body) {
    const headers = {
        'Content-Type': 'application/json'
    };
    const token = localStorage.getItem('AUTH_TOKEN');

    // If a token is provided, include it in the headers
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    console.log("token test", token);

    return {
        method,
        headers,
        body: JSON.stringify(body)
    };
}

// Fetch all the products
async function fetchProducts() {
    return await sendRequest(API_URL);
};

// Fetch a product by ID
async function fetchProductById(product_id) {
    return await sendRequest(`${API_URL}/${product_id}`);
}

// Create or add a product
async function createProduct(product) {
    const options = createRequestOptions('POST', product);
    return await sendRequest(`${API_URL}/add`, options);
}

// Update a product by product_id
async function updateProduct(product) {
    const options = createRequestOptions('PUT', product);
    return await sendRequest(`${API_URL}/${product._id}`, options)
}

// Delete a product by product _id
async function deleteProduct(productId) {
    const options = createRequestOptions('DELETE');
    await sendRequest(`${API_URL}/${productId}`, options);
}

export default {
    fetchProducts,
    deleteProduct,
    createProduct,
    updateProduct,
    fetchProductById
};
