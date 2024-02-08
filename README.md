# Ecommerce Book Store website (product) using React Application:

## Screenshots
### Book Store Application Screenshots
You can see the app in action with these screenshots:

<details>
<summary>BookStore SignIn</summary>
<img src="https://github.com/sarojregmi279/MERN-Stack-Integration-for-Book-Store-Application/raw/main/screenshots/BookStore_SignIn.png" alt="BookStore SignIn" width="300"/>
</details>

<details>
<summary>BookStore Signup</summary>
<img src="https://github.com/sarojregmi279/MERN-Stack-Integration-for-Book-Store-Application/raw/main/screenshots/BookStore_Signup.png" alt="BookStore Signup" width="300"/>
</details>

<details>
<summary>BookStore HomePage1</summary>
<img src="https://github.com/sarojregmi279/MERN-Stack-Integration-for-Book-Store-Application/raw/main/screenshots/BookStore_HomePage1.png" alt="BookStore HomePage1" width="300"/>
</details>

<details>
<summary>BookStore HomePage2</summary>
<img src="https://github.com/sarojregmi279/MERN-Stack-Integration-for-Book-Store-Application/raw/main/screenshots/BookStore_HomePage2.png" alt="BookStore HomePage2" width="300"/>
</details>

<details>
<summary>BookStore Translate Page</summary>
<img src="https://github.com/sarojregmi279/MERN-Stack-Integration-for-Book-Store-Application/raw/main/screenshots/BookStore_TranslatePage.png" alt="BookStore Translate Page" width="300"/>
</details>

<details>
<summary>BookStore Filter Page</summary>
<img src="https://github.com/sarojregmi279/MERN-Stack-Integration-for-Book-Store-Application/raw/main/screenshots/BookStore_FilterPage.png" alt="BookStore Filter Page" width="300"/>
</details>

<details>
<summary>BookStore Admin CRUD Page</summary>
<img src="https://github.com/sarojregmi279/MERN-Stack-Integration-for-Book-Store-Application/raw/main/screenshots/BookStoreAdminCRUD_Page.png" alt="BookStore Admin CRUD Page" width="300"/>
</details>

<details>
<summary>BookStore Cart</summary>
<img src="https://github.com/sarojregmi279/MERN-Stack-Integration-for-Book-Store-Application/raw/main/screenshots/BookStore_Cart.png" alt="BookStore Cart Page" width="300"/>
</details>

<details>
<summary> CheckOut: Payment Stripe </summary>
<img src="https://github.com/sarojregmi279/MERN-Stack-Integration-for-Book-Store-Application/blob/main/screenshots/BookStore_Stripe.png" alt="BookStore Stripe" width="300"/>
</details>

<details>
<summary> Order History </summary>
<img src="https://github.com/sarojregmi279/MERN-Stack-Integration-for-Book-Store-Application/blob/main/screenshots/BookStore_orderHistory.png" alt="BookStore Stripe" width="300"/>
</details>

## Auth
* Login
* Logout
* Signup
  
## App functions

### Admin 
* Create/Read/Delete/Update products
  
### Regular user
* List products
* Add products to Cart
* Search a product
* Filter product
* Add product to cart
* Orders History
  
### Special functions
* Payment for Cart Checkout (stripe)
  
## Technology
* Frontend: React
* Backend: NodeJS Express, Mongoose, Cors, bcrypt for hashing, jwt
* Database: Mongoose
* Others: Push notification, Material -UI, Translation (open AI)
  
## Deloyment: AWS
* Handle Authentication & User Roles : React Context API for State Mgmt     
* Implement Routing for Navigation     
# Project Architecture

## Frontend
- **Technologies:** React, Material-UI
- **Functionality:** 
  - Login
  - Signup
  - Logout
  - Product List
  - Product Details
  - Cart
  - Search
  - Filter
  - Orders History
  - Checkout
  - Notifications

## Backend
- **Technologies:** Node.js, Express
- **API Endpoints:**
  - Authentication (Login, Signup)
  - CRUD for Product Management (Admin)
  - Regular User API Endpoints (List Products)
- **Middleware:**
  - JWT-based Authentication & Authorization
- **Payment Processing:** Stripe

## Database
- **Database:** MongoDB (Mongoose)

## Third-Party Integrations
- Stripe
- OpenAI/ Language translation

## Deployment
- **Frontend Deployment:** AWS S3 or Amplify
- **Backend Deployment:** AWS EC2 or Elastic Beanstalk
- **Database Hosting:** MongoDB Atlas

Frontend:

The frontend is responsible for presenting the user interface and handling user interactions. It includes various components such as Login, Signup, Product List, Cart, Search, Filter, Orders History, Checkout, and Notifications.
When a user interacts with the frontend, it sends API requests to the backend to perform specific actions like logging in, signing up, fetching product data, adding items to the cart, etc.
The frontend will handle the logic for showing/hiding appropriate components based on the user's role (admin or regular user).
Frontend will implement routing to enable navigation between different pages/components.

Backend:
The backend is responsible for handling API requests from the frontend and performing corresponding operations.
It is built using Node.js with the Express framework, which allows it to handle incoming HTTP requests.
The backend will interact with the MongoDB database (using Mongoose) to perform CRUD operations on products, store user data, and manage order history.
It will implement authentication endpoints (login, signup, logout) to handle user authentication using JWT (JSON Web Tokens).
The backend will also have API endpoints for regular user functions like listing products, adding products to the cart, searching, filtering, and viewing order history.
For special functions, like payment processing, the backend will integrate with payment gateways like Stripe.

Authentication:
The authentication process will be handled by the backend using JWT (JSON Web Tokens).
When a user logs in or signs up, the backend will verify the user's credentials and issue a JWT token upon successful authentication.
This JWT token will be sent to the frontend and stored securely (e.g., in local storage or cookies).
For subsequent requests that require authentication, the frontend will include the JWT token in the request headers, allowing the backend to identify and authenticate the user.
The backend will also have middleware to check the validity of the JWT token for protecting specific API endpoints and ensuring that only authorized users can access certain features (e.g., admin functionalities).
