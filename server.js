require("dotenv").config({ path: "./config/.env" });

const express = require("express");

const app = express();

// DATA BASE CONNECTION
const connectDB = require("./config/DataBase");

connectDB();

app.use(express.json());

// Routing is Here
const Route = require("./routes/User_REST_API.js");
app.use("/api/user/", Route);

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    err
        ? console.log(`SERVER CONNECTION FAILD AT ${err}`)
        : console.log(
              `SERVER CONNECTION SUCCESS !!!\nSERVER RUNNIG ON PROT ${PORT}`
          );
});