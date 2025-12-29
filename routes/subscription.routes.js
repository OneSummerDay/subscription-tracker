import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({title: 'Getgit all Subscriptions'});
});

subscriptionRouter.get('/:id', (req, res) => {
    res.send({title: 'Get Subscription by ID'});
});

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
    res.send({title: 'Update Subscription by ID'});
});

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({title: 'Delete Subscription by ID'});
});

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({title: 'Cancel Subscription by ID'});
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({title: 'Get Upcoming Subscriptions'});
});


export default subscriptionRouter;