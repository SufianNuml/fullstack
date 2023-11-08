const express = require("express");
require("./db/config");
const test = require("./db/user");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Middleware for handling CORS
app.use(cors({
    origin: process.env.ALLOWED_ORIGIN, // Set this as an environment variable
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.json());

app.get("/", (req, resp) => {
    resp.json("hello");
});

app.post("/login", async (req, resp) => {
    try {
        const data = new test(req.body);
        const result = await data.save();
        resp.send(result);
    } catch (error) {
        resp.status(500).json({ error: "An error occurred" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
