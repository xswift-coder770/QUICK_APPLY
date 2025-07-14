 
 
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userDataRoutes from './routes/userRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import express from 'express';
import authRoutes from './routes/authRoutes.js';

// import authRoutes from './routes/authRoutes.js';


dotenv.config();         
connectDB();              

const app = express();
app.use(cors());
app.use(express.json());

// API Routes

app.use("/api/userdata", userDataRoutes); // User-related routes
app.use("/api/ai", aiRoutes);             // AI rephrase routes
app.use('/api/auth', authRoutes);

// app.use('/api/auth', authRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
