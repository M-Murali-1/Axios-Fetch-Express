
# 📘 GET Method in Web Development

## ✅ What is the GET Method?

The `GET` method is used to **retrieve data** from a server. It:

- Sends parameters in the **URL**, not in the body.
- Is **idempotent** – it doesn't change data on the server.
- Is typically used for reading, searching, or filtering data.

---

## 🚀 Sending a GET Request from the Frontend

### 🔹 Using Axios

```js
import axios from 'axios';

axios.get('http://localhost:8080/user', {
  params: {
    id: 123,
    name: "Murali"
  }
})
.then(response => {
  console.log("Response:", response.data);
})
.catch(error => {
  console.error("Error:", error);
});
```

➡️ **URL sent to backend**:  
`http://localhost:8080/user?id=123&name=Murali`

---

### 🔹 Using Fetch

```js
const id = 123;
const name = "Murali";

const url = `http://localhost:8080/user?id=${id}&name=${encodeURIComponent(name)}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Response:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

---

## 🛠️ Accessing the GET Request in Express Backend

```js
const express = require('express');
const app = express();

app.get('/user', (req, res) => {
  console.log(req.query); // Output: { id: '123', name: 'Murali' }

  res.status(200).json({
    message: "User data received successfully",
    data: req.query
  });
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
```

---

## 📋 GET Request Overview

| Property          | Type     | Example                             | Access in Backend |
|------------------|----------|-------------------------------------|-------------------|
| Query Parameters | `query`  | `/user?id=123&name=Murali`         | `req.query`       |
| Path Parameters  | `params` | `/user/:id` → `/user/123`          | `req.params`      |
| Body             | ❌ Not allowed in GET | -                           | -                 |

---

## 📥 Example JSON Response

```json
{
  "message": "User data received successfully",
  "data": {
    "id": "123",
    "name": "Murali"
  }
}
```

---

## ⚠️ Notes & Best Practices

- ❌ **You cannot send a body** in a GET request.
- ✅ Use **`req.query`** for optional key-value parameters in the URL.
- ✅ Use **`req.params`** for required parts of the route path.
- 🚫 Never send sensitive data (like passwords) in the URL.
- ✅ Use `response.json()` in the frontend to convert response into usable JavaScript.

---

## ✅ When to Use GET

- Retrieving a user profile
- Getting a list of products
- Searching/filtering with query parameters
- Loading non-sensitive configuration or content
