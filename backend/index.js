import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoutes from './routes/book.route.js';
import userRoutes from './routes/user.route.js';

const app = express()

app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.Mongo_URI;
//connect to database

 

try {
    mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("Connected to MongoDB");
    
} catch (error) {
    console.log("Error connecting to MongoDB:", error);
}

app.use(express.json());
app.use("/book", bookRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
