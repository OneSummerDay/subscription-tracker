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

userRouter.put('/user/:id', (req, res) => {
    res.send({title: 'Update user by ID'});
});

userRouter.delete('user/:id', (req, res) => {
    res.send({title: 'Delete user by ID'});
});