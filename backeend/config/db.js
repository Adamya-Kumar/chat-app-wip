const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const Conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected ${Conn.connection.host}`.blue.bold);
  } catch (error) {
    console.log(`${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
