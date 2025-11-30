import express from 'express';

import 'dotenv/config';
import cors from 'cors';
 
import { errorHandler } from './middleware/errorHandler';
import { notFoundHandler } from './middleware/notFoundHandler';
import { connectMongoDB } from './db/connectMongoDB';
import router from './routes/notesRoutes';
import {logger} from './middleware/logger';
const app = express();
app.use(express.json({
  type: ['application/json', 'application/vnd.api+json'],
}));

const PORT = process.env.PORT ?? 3000;

await connectMongoDB();

app.use(logger(), express.json(), cors());
app.use(router);

app.use(notFoundHandler);
app.use(errorHandler);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});


