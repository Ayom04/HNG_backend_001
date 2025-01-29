# HNG12 Stage 0 - Public API

## **Project Description**

This is a simple public API built for task 1 in HNG12. The API returns:

- Your **registered email** on the HNG12 Slack workspace.
- The **current date and time** in ISO 8601 UTC format.
- The **GitHub repository URL** for this project.

---

## **API Documentation**

### **Base URL:**

### **Endpoint:**

#### `GET /`

### **Response Format:**

All responses are in **JSON format**.

### **Success Response (`200 OK`)**

```json
{
  "email": "abdullahayomide04@example.com",
  "current_datetime": "2025-01-29T22:20:39.475Z",
  "github_url": "https://github.com/Ayom04/HNG_backend_001"
}
```

Error Response (500 Internal Server Error)

```json
{ "error": "An error occurred" }
```

## Setup instructions

1. Clone the repository:

```bash
    git clone https://github.com/Ayom04/HNG_backend_001.git
```

2. Change directory to the project folder:

```bash
    cd HNG_backend_001
```

3. Install the project dependencies:

```bash
    npm install
```

4. Start the server:

```bash
    npm start
```

5. Visit `http://localhost:3000/` in your browser to view the API response.

## **Backlinks**

| **Technology** | **Hiring Link**                                                    |
| -------------- | ------------------------------------------------------------------ |
| Python         | [Hire Python Developers](https://hng.tech/hire/python-developers)  |
| C#             | [Hire C# Developers](https://hng.tech/hire/csharp-developers)      |
| Go             | [Hire Go Developers](https://hng.tech/hire/golang-developers)      |
| PHP            | [Hire PHP Developers](https://hng.tech/hire/php-developers)        |
| Java           | [Hire Java Developers](https://hng.tech/hire/java-developers)      |
| Node.js        | [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers) |
