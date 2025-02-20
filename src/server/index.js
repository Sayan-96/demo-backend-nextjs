// creating the express server to perform some operations

const express = require('express');
// import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/', (req, res) => {
    res.send('Hello World');
    }
)

app.listen(4000, () => {
    console.log('Server is running at port 4000');
    }
)
