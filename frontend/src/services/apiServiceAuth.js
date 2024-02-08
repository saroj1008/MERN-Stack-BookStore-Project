
const API_URL = "http://localhost:4000/auth";

async function sendRequest(url, options) {
    const response = await fetch(url, options);
    return await response.json();
}

function createRequestOptions(method, body) {
    const headers = {
        'Content-Type': 'application/json'
    };

    // Retrieve the token from localStorage
    const token = localStorage.getItem('AUTH_TOKEN');
    // If a token is provided, include it in the headers
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    return {
        method,
        headers,
        body: JSON.stringify(body)
    };
}

async function signInUserAdmin(credentials) {
    const options = createRequestOptions('POST', credentials);
    return await sendRequest(`${API_URL}/signin`, options);
}

async function signUpUserAdmin(signupInformation) {
    const options = createRequestOptions('POST', signupInformation);
    return await sendRequest(`${API_URL}/signup`, options);
}

export default {
    signInUserAdmin,
    signUpUserAdmin
};