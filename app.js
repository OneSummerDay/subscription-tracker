import express from 'express';

import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/app/v1/users', userRouter);
app.use('/app/v1/auth', authRouter);
app.use('/app/v1/subscriptions', subscriptionRouter);

app.use(errorMiddleware);


app.get('/', (req, res) => {
    res.send('OK!');
})


app.listen(PORT, async () => {
   console.log(`Server is running on port ${PORT}`);

   await connectToDatabase();
})


export default app;
