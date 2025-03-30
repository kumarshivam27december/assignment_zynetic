Set up instruction
1. Clone the repository
git clone https://github.com/kumarshivam27december/assignment_zynetic.git
cd zynetic_project

2. Install dependencies
npm install

3. Configure environment variables:
Create a .env file using .env
Set MONGO_URI, JWT_SECRET, and PORT

4. Start the Server
npm start

5. API will be accessible at http://localhost:3000

6. API Endpoints and Sample Requests

------Authentication---------

POST /api/auth/signup - User Signup
{
        "email": "shivam@example.com",
        "password": "password123"
}

POST /api/auth/login - User Login
{
        "email": "shivam@example.com",
        "password": "password123"
}


---------------Books-----------

POST /api/books (Protected) - Create a Book
{
        "title": "Title of the Book",
        "author": "Name of the author",
        "category": "Fiction",
        "price": 20,
        "rating": 4.5,
        "publishedDate": "2024-03-30"
}

GET /api/books - Get All Books with Filters, Search, and Pagination

GET /api/books?author=shivam&category=Fiction&minRating=4&search=math&sortBy=price&order=desc&page=1&limit=10


GET /api/books/:id - Get Book by ID
PUT /api/books/:id (Protected) - Update Book by ID
DELETE /api/books/:id (Protected) - Delete Book by ID


Assumptions and Enhancements
JWT is used for authentication and protecting routes.
Passwords are securely hashed using bcrypt.
MongoDB is used for data storage.
Basic error handling with appropriate status codes.
Filtering, searching, and sorting are implemented using query parameters.
Pagination supports large datasets effectively.
Token expiry is set to 1 day.

