const express = require('express');
const { connectMongoDb } = require('./connection/connection');

const userRouter = require('./routes/user');
const app = express();
const PORT = 8000;

// conection
connectMongoDb('mongodb://localhost:27017').then(() => {
    console.log('database connected');
})
    .catch(err => console.log('error connecting', err));

// middleware
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/user', userRouter);


app.listen(PORT, ()=> {
    console.log('listening on port', PORT);
})
