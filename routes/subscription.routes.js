import { Router } from "express";
import authorize from "../middlewares/auth.middleware";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({title: 'Getgit all Subscriptions'});
});

subscriptionRouter.get('/:id', (req, res) => {
    res.send({title: 'Get Subscription by ID'});
});

subscriptionRouter.post('/', authorize, (req, res) => {
    res.send({title: 'Create a new Subscription'});
});

subscriptionRouter.put('/:id', (req, res) => {
    res.send({title: 'Update Subscription by ID'});
});

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({title: 'Delete Subscription by ID'});
});

subscriptionRouter.get('/user/:userId', (req, res) => {
    res.send({title: 'Get Subscriptions by User ID'});
});

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({title: 'Cancel Subscription by ID'});
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({title: 'Get Upcoming Subscriptions'});
});


export default subscriptionRouter;