import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoutes from './routes/book.route.js';
import userRoutes from './routes/user.route.js';

dotenv.config(); 

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());


const PORT = process.env.PORT || 4001;
const URI = process.env.Mongo_URI;

if (!URI) {
  console.error("❌ Mongo_URI not defined in environment variables");
  process.exit(1);
}

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1); 
});

// Routes
app.use("/book", bookRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Library Hub Backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
