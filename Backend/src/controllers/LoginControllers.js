import express from 'express';
const Router = express.Router();

Router.get('/users/:id', (req, res) => {
    res.send('Hello World');
});

Router.put('/users/:id', (req, res) => {
    res.send('Hello World');
});

Router.delete('/users', (req, res) => {
    res.send('Hello World');
});

