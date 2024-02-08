const API_URL = "http://localhost:4000/users";

async function sendRequest(url, options) {
    console.log("test send request", url, options);
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

// Fetch a user by user_id
async function fetchUser(user_id) {
    return await sendRequest(`${API_URL}/${user_id}`);
}

// Fetch a user's cart
async function fetchCart(user_id) {
    return await sendRequest(`${API_URL}/${user_id}/cart`);
}

// Add a product to the user's cart
async function addProductToCart(user_id, product) {
    const options = createRequestOptions('POST', product);
    console.log("userid", user_id);
    return await sendRequest(`${API_URL}/${user_id}/cart`, options);
}

// Delete a product from the user's cart
async function deleteCartProduct(user_id, cart_id) {
    const options = createRequestOptions('DELETE');
    return await sendRequest(`${API_URL}/${user_id}/cart/${cart_id}`, options);
}

// Check out the cart and place an order
async function cartCheckOut(user_id) {
    const options = createRequestOptions('POST');
    return await sendRequest(`${API_URL}/${user_id}/place-order`, options);
}

// Fetch the user's order history
async function fetchOrderHistory(user_id) {
    return await sendRequest(`${API_URL}/${user_id}/order-history`);
}

// Increase the count of a cart item by cart_id
async function increaseCountByCountId(user_id, cart_id) {
    const options = createRequestOptions('POST');
    return await sendRequest(`${API_URL}/${user_id}/cart/${cart_id}/increase`, options);
}

// Decrease the count of a cart item by cart_id
async function decreaseCountByCountId(user_id, cart_id) {
    const options = createRequestOptions('POST');
    return await sendRequest(`${API_URL}/${user_id}/cart/${cart_id}/decrease`, options);
}

export default {
    fetchUser,
    fetchCart,
    addProductToCart,
    deleteCartProduct,
    cartCheckOut,
    fetchOrderHistory,
    increaseCountByCountId,
    decreaseCountByCountId,
};
