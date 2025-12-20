import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({title: 'Getgit all Subscriptions'});
});

subscriptionRouter.get('/:id', (req, res) => {
    res.send({title: 'Get Subscription by ID'});
});

subscriptionRouter.post('/', (req, res) => {
    res.send({title: 'Create a new Subscription'});
});


export default subscriptionRouter;