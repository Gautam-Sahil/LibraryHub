import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoutes from './routes/book.route.js';
import userRoutes from './routes/user.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;
const URI = process.env.Mongo_URI;


app.use(cors({
  origin: [
    "http://localhost:5173", 
    'https://library-hub-omega.vercel.app',
   "https://libraryhub-jywl.onrender.com"  
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());






mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.log("❌ MongoDB connection error:", err));

// ✅ Routes
app.use("/book", bookRoutes);
app.use("/user", userRoutes);

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
