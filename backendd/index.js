const express = require("express");
require("./db/config");
const test = require("./db/user");
const cors = require("cors");

const app = express();
app.use(cors({
    origin: process.env.ALLOWED_ORIGIN,  // Set this as an environment variable
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());

app.get("/", (req, resp) => {
    resp.json("hello");
});

app.post("/login", async (req, resp) => {
    let data = new test(req.body);
    let result = await data.save();
    resp.send(result);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is running on port " + port);
});
