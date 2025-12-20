import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send({title: 'Fetch all Users'});
});

userRouter.get('/user/:id', (req, res) => {
    res.send({title: 'Get user by ID'});
});