import express from 'express';

import 'dotenv/config';
import cors from 'cors';
 
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import authRoutes from './routes/authRoutes.js';
import notesRoutes from './routes/notesRoutes.js';
import userRoutes from './routes/userRoutes.js'
import { logger } from './middleware/logger.js';
import { errors } from 'celebrate';
import cookieParser from 'cookie-parser';


const app = express();
app.use(express.json({
  type: ['application/json', 'application/vnd.api+json'],
}));

const PORT = process.env.PORT ?? 3000;

await connectMongoDB();

app.use(logger);
app.use(cors());

app.use(cookieParser());

app.use(authRoutes);
app.use(notesRoutes);
app.use(userRoutes);

app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});


