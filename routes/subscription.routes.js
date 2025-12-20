import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({title: 'Getgit all Subscriptions'});
});

subscriptionRouter.get('subscription/:id', (req, res) => {
    res.send({title: 'Get Subscription by ID'});
});