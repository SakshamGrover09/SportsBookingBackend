### **College ID:** IIT2021188: Saksham Grover <br>
### **College email:** iit2021188@iiita.ac.in <br>

### **Frontend Deployment Link**: https://67101cf03a6926fdd55daaff--brilliant-gumdrop-d803b2.netlify.app <br>
### **Backend Deployment Link**: https://sportsbookingbackend.onrender.com/api <br>
### **Frontend Github Link**: https://github.com/SakshamGrover09/SportsBookingFrontend <br>

## **Sports Booking Backend** <br>
This is the backend service for the Sports Booking App, built using Node.js, Express, and MongoDB. It provides RESTful APIs for managing sports centres, bookings, user authentication, and more.

## **Directory Structure** <br>

sports-booking-backend/ <br>
│
├── models/
│   ├── User.js           // User model schema with bcrypt password hashing <br>
│   ├── Centre.js         // Centre model schema with nested sports and slots <br>
│   └── Booking.js        // Booking model schema to store booking details <br>
│ <br>
├── routes/ <br>
│   ├── auth.js           // Authentication routes (login, signup) <br>
│   ├── centre.js         // Routes for fetching and managing centres and sports <br>
│   ├── booking.js        // Routes for creating and fetching bookings <br>
│ <br>
├── middleware/ <br>
│   ├── authMiddleware.js // Middleware for verifying JWT tokens <br>
│ <br>
├── config/ <br>
│   └── db.js             // MongoDB connection setup <br>
│ <br>
├── server.js             // Entry point for starting the Express server <br> 
└── README.md             // Documentation for the backend <br>

## **Setup Instructions** <br>

### **Clone the Repository:** <br>

git clone https://github.com/your-repository/sports-booking-backend.git <br>
cd sports-booking-backend

### **Install Dependencies:** <br>

npm install <br>
Create a .env File: 

### **Create a .env file in the root directory and add the following environment variables:** <br>

MONGO_URI=your_mongodb_connection_string <br>
JWT_SECRET=your_jwt_secret_key <br>
PORT=5000

### **Run the Server:**

node server.js <br>
The server will start on http://localhost:5000. <br>

## **API Endpoints**

### **Auth Routes:** <br>

POST /api/auth/register - Create a new user. <br>
POST /api/auth/login - Login user and receive a JWT token. <br>

### **Centre Routes:** <br>

GET /api/centres - Get a list of all centres.

### **Booking Routes:** <br>

POST /api/bookings - Create a new booking. <br>
GET /api/bookings - Get bookings for a specific centre, sport, and date.

## **Technologies Used** <br>

Node.js, Express.js <br>
MongoDB & Mongoose  <br>
JWT for authentication <br>
bcrypt for password hashing <br>
