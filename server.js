const express = require("express");
const connectDB = require("./config/connectDB");
const admin = require ("./routes/admin")
const app = express();
app.use(express.json());

connectDB();
const PORT = process.env.PORT || 5000;



//routers

app.use("/register",admin );
app.use("/login", admin)

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server is running on port PORT`)
);