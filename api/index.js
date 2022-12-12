import express from 'express';
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);


app.listen(8800, () => {
    console.log('Connected wih backend!');
})