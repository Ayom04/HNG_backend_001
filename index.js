const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    return res.status(200).json({
      email: "abdullahayomide04@example.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/Ayom04/HNG_backend_001", // Replace with your GitHub repo URL
    });
  } catch (error) {
    return res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
