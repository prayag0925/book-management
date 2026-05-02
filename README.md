# Book Store Management System

## Problem Definition
This project is a web based book store management system. Using this system we can add books, view all books, update book details and also delete books. The book cover image is also uploaded using multer middleware.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (template engine)
- Multer (for image upload)
- Method-Override
- Nodemon

## Folder Structure

```
bookstore/
│
├── app.js
├── package.json
│
├── config/
│   └── multerConfig.js
│
├── models/
│   └── Book.js
│
├── controllers/
│   └── bookController.js
│
├── routes/
│   └── bookRoutes.js
│
├── views/
│   ├── index.ejs
│   ├── add.ejs
│   └── edit.ejs
│
├── public/
│   └── css/
│       └── style.css
│
└── uploads/
```

## Features
- Add new book with image upload
- View all books from mongodb database
- Edit/Update book details
- Delete book from database
- Book cover image stored in uploads folder

## MongoDB Schema

```js
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    description: { type: String },
    image: { type: String, default: 'noimage.png' }
})
```

## How to Run

```
1. Clone the repository
2. Run: npm install
3. Start MongoDB on your system
4. Run: npm run dev
5. Open browser: http://localhost:3000
```

## Screenshots

(add screenshots here after running project)
