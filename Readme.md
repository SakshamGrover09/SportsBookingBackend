**College ID:** IIT2021188: Saksham Grover
**College email:** iit2021188@iiita.ac.in

**Frontend Deployment Link**: https://67101cf03a6926fdd55daaff--brilliant-gumdrop-d803b2.netlify.app/login
**Frontend Deployment Link**: https://sportsbookingbackend.onrender.com/api

**Sports Booking Backend**
This is the backend service for the Sports Booking App, built using Node.js, Express, and MongoDB. It provides RESTful APIs for managing sports centres, bookings, user authentication, and more.

**Directory Structure**

sports-booking-backend/
│
├── models/
│   ├── User.js           // User model schema with bcrypt password hashing
│   ├── Centre.js         // Centre model schema with nested sports and slots
│   └── Booking.js        // Booking model schema to store booking details
│
├── routes/
│   ├── auth.js           // Authentication routes (login, signup)
│   ├── centre.js         // Routes for fetching and managing centres and sports
│   ├── booking.js        // Routes for creating and fetching bookings
│
├── middleware/
│   ├── authMiddleware.js // Middleware for verifying JWT tokens
│
├── config/
│   └── db.js             // MongoDB connection setup
│
├── server.js             // Entry point for starting the Express server
└── README.md             // Documentation for the backend

**Setup Instructions**

**Clone the Repository:**

git clone https://github.com/your-repository/sports-booking-backend.git
cd sports-booking-backend

**Install Dependencies:**

npm install
Create a .env File:

**Create a .env file in the root directory and add the following environment variables:**

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

**Run the Server:**

node server.js
The server will start on http://localhost:5000.

**API Endpoints**

**Auth Routes:**

POST /api/auth/register - Create a new user.
POST /api/auth/login - Login user and receive a JWT token.

**Centre Routes:**

GET /api/centres - Get a list of all centres.

**Booking Routes:**

POST /api/bookings - Create a new booking.
GET /api/bookings - Get bookings for a specific centre, sport, and date.

**Technologies Used**

Node.js, Express.js
MongoDB & Mongoose
JWT for authentication
bcrypt for password hashing
