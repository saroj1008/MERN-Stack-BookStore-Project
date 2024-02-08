
# Ecommerce website (product) using React Application:

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




          +----------------------+                 +------------------+
          |                      |                 |                  |
          |     Frontend         |   API Requests  |    Backend       |
          |                      +---------------->|                  |
          |  Login              |                 |  Node.js with    |
          |  Signup             |                 |  Express         |
          |  Logout             |   API Responses |                  |
          |  Product List       |<----------------+                  |
          |  Product Details    |                 |                  |
          |  Cart               |                 |                  |
          |  Search             |                 |                  |
          |  Filter             |                 |                  |
          |  Orders History     |                 |                  |
          |  Checkout           |                 |                  |
          |  Notifications      |                 |                  |
          |  Material-UI        |                 |                  |
          |  React              |                 |                  |
          +---------+------------+                 +--------+---------+
                    |                                          |
                    |                                          |
                    |    API Requests/Responses                |
                    |                                          |
                    v                                          v
          +---------+------------------------------------------+---------+
          |                                                            |
          |                      Backend Logic                         |
          |                                                            |
          |  +--------------------------------------------------------+|
          |  |                                                        |  |
          |  |  Implement Authentication Endpoints (Login, Signup)    |  |
          |  |  CRUD API Endpoints for Product Management (Admin)     |  |
          |  |  Regular User API Endpoints (List product )               |  |
          |  |  Middleware for JWT-based Authentication & Authorization | |
          |  |  Handle Payment Processing (Stripe)                    |  |
          |  +--------------------------------------------------------+  |
          |                                                              |
          +---------+------------------------------------------+---------+
                    |                                          |
                    |                                          |
                    v                                          v
          +---------+------------+                 +---------+---------+
          |                      |                 |                   |
          |     Database         |                 |  Third-Party      |
          |                      |                 |  Integrations     |
          |  MongoDB (Mongoose)  |                 |                   |
          |                      |                 |  Stripe           |
          |                      |                 |  OpenAI           | 
          +----------------------+                 +-------------------+
          

          +------------------------------------+
          |                                    |
          |            Deployment              |
          |                                    |
          |  Frontend: AWS S3 or Amplify       |
          |  Backend: AWS EC2 or Elastic Beanstalk|
          |  MongoDB:  MongoDB Atlas           |
          |                                    |
          +------------------------------------+

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