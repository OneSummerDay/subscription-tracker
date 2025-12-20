import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send({title: 'Fetch all Users'});
});

userRouter.get('/user/:id', (req, res) => {
    res.send({title: 'Get user by ID'});
});

userRouter.post('/', (req, res) => {
    res.send({title: 'Create a new User'});
});