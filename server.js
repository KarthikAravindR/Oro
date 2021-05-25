const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "src")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(process.env.PORT || 8090, () => console.log("Server running in http://localhost:8090/"));