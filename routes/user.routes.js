import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/user/:id', getUser);

userRouter.post('/', (req, res) => {
    res.send({title: 'Create a new User'});
});

userRouter.put('/user/:id', (req, res) => {
    res.send({title: 'Update user by ID'});
});

userRouter.delete('user/:id', (req, res) => {
    res.send({title: 'Delete user by ID'});
});


export default userRouter;