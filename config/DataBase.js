require("dotenv").config({ path: "./.env" });

// mongoose packege
const mongoose = require("mongoose");

// DATA BASE CONNECTION
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("DATA BASE CONNECTION SUCCESS !!!!");
    } catch (err) {
        console.log("DATA BASE CONNECTION FAILD !!!!");
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;