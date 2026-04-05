const express = require("express");
const application = express();
const db = require('./db');
const PORT = 3000;
application.use(express.json());


application.get("/", (req, res) => {
    res.send("Server və Database qoşulması uğurludur");
});



application.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

