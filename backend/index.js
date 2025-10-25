import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoutes from './routes/book.route.js';
import userRoutes from './routes/user.route.js';

dotenv.config(); // Load env variables BEFORE using them

const app = express();

// Enable CORS (optional: restrict origin in production)
app.use(cors());
app.use(express.json());

// Use dynamic PORT
const PORT = process.env.PORT || 4001;

// MongoDB URI from environment variables
const URI = process.env.Mongo_URI;

if (!URI) {
  console.error("❌ Mongo_URI not defined in environment variables");
  process.exit(1); // stop server if no DB URI
}

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1); // stop server if DB connection fails
});

// Routes
app.use("/book", bookRoutes);
app.use("/user", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Library Hub Backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
