

---

# 📚 Book Store Management System

## 🎯 Project Overview
This project is a web based Book Store Management System. Using this system we can add new books, view all books, update book details and delete books from database. Book cover image upload is also done using Multer middleware.

---

## 🛠️ Technologies Used

| Technology | Use |
|------------|-----|
| ⚙️ Node.js | Server side runtime |
| 🚀 Express.js | Web framework and routing |
| 🍃 MongoDB | Database storage |
| 🔗 Mongoose | MongoDB connection |
| 📄 EJS | Dynamic frontend pages |
| 📁 Multer | Book cover image upload |
| 🔄 Method-Override | PUT and DELETE from HTML form |
| 🔥 Nodemon | Live server update |

---

## 📁 Folder Structure

```
bookstore/
│
├── app.js
├── package.json
├── README.md
├── .gitignore
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

---

## ✅ Features

- ➕ Add new book with cover image upload
- 📖 View all books from MongoDB database
- ✏️ Edit and update book details
- ❌ Delete book from database
- 🖼️ Book cover image stored in uploads folder
- 📊 Total books count shown on dashboard

---

## 🗄️ MongoDB Schema

```js
const bookSchema = new mongoose.Schema({
    title:       { type: String, required: true },
    author:      { type: String, required: true },
    category:    { type: String, required: true },
    price:       { type: Number, required: true },
    quantity:    { type: Number, required: true },
    description: { type: String },
    image:       { type: String, default: 'noimage.png' }
})
```

---

## 🚀 How to Run

```
1. Clone the repository
2. Run: npm install
3. Start MongoDB service
4. Run: npm run dev
5. Open browser: http://localhost:9000
```

---

## 📸 Screenshots

### 🏠 Home Page - All Books
<!-- add screenshot here -->

### ➕ Add Book Page
<!-- add screenshot here -->

### ✏️ Edit Book Page
<!-- add screenshot here -->

### 🗄️ MongoDB Compass - Database
<!-- add screenshot here -->

---

## 👨‍💻 Author
**Prayag patel** 

