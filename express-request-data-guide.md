
# 🔍 Understanding `req.params`, `req.query`, and `req.body` in Express.js

This guide explains how to send and access different types of data in HTTP requests using **Axios** and **Fetch** from the frontend, and access them in an **Express.js** backend using `req.params`, `req.query`, and `req.body`.

---

## 1️⃣ `req.params`

### 📌 What is it?

- Used to capture **route parameters** from the URL path.
- Useful for identifying specific resources.

### 🧠 Example

```js
// Backend (Express)
app.get('/user/:id', (req, res) => {
  console.log(req.params); // { id: '123' }
  res.send({ userId: req.params.id });
});
```

#### ✅ Frontend with Axios

```js
axios.get('http://localhost:8080/user/123')
  .then(res => console.log(res.data));
```

#### ✅ Frontend with Fetch

```js
fetch('http://localhost:8080/user/123')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 2️⃣ `req.query`

### 📌What is it?

- Used for **query parameters** in the URL.
- Commonly used for filters, search, pagination, etc.

### 🧠Example

```js
// Backend (Express)
app.get('/search', (req, res) => {
  console.log(req.query); // { q: 'murali', page: '2' }
  res.send({ result: req.query });
});
```

#### ✅Frontend with Axios

```js
axios.get('http://localhost:8080/search', {
  params: { q: 'murali', page: 2 }
});
```

#### ✅Frontend with Fetch

```js
fetch('http://localhost:8080/search?q=murali&page=2')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 3️⃣ `req.body`

### 📌What is it?

- Used to send **payload data** in the body of the request.
- Applicable only for `POST`, `PUT`, `PATCH` methods.
- Requires middleware like `express.json()`.

### 🧠 Example

```js
// Backend (Express)
app.post('/register', (req, res) => {
  console.log(req.body); // { name: 'Murali', email: 'test@example.com' }
  res.send({ success: true });
});
```

#### ✅ Frontend with Axios

```js
axios.post('http://localhost:8080/register', {
  name: 'Murali',
  email: 'test@example.com'
});
```

#### ✅ Frontend with Fetch

```js
fetch('http://localhost:8080/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Murali', email: 'test@example.com' })
});
```

---

## 🔁 Summary Table

| Property      | Use Case                         | HTTP Methods           | Access in Express | Data Location              |
|---------------|----------------------------------|------------------------|--------------------|----------------------------|
| `req.params`  | Identify specific resources       | GET, PUT, DELETE       | `req.params`       | URL Path (e.g., `/user/1`) |
| `req.query`   | Search, filter, pagination        | GET                    | `req.query`        | URL Query (e.g., `?page=2`)|
| `req.body`    | Submit form or structured data    | POST, PUT, PATCH       | `req.body`         | Request Body (JSON)        |

---

## ⚠️ Important Notes

- Use `express.json()` to parse JSON bodies in Express:

```js
app.use(express.json());
```

- You **cannot send `req.body`** in a GET request.
- Always validate incoming data before using it.

---

## ✅ Best Practices

- Use `params` when resource ID is required (`/users/:id`).
- Use `query` when data should be optional or used for filtering.
- Use `body` for creating or updating large structured data (forms, JSON).

---

## 🧪 Sample Express Setup

```js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/user/:id', (req, res) => res.json(req.params));
app.get('/search', (req, res) => res.json(req.query));
app.post('/register', (req, res) => res.json(req.body));

app.listen(8080, () => console.log('Server running on port 8080'));
```

---

## 🔚 That’s a wrap

This document helps you confidently distinguish and use `req.params`, `req.query`, and `req.body` in real-world applications.
