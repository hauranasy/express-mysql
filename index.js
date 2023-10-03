require('dotenv').config();
const PORT = 3000

const express = require ('express');

const usersRoutes = require('./routes/users.js');

const middlewareLogRequest = require('./middleware/logs.js');

const app = express ();

app.use(middlewareLogRequest);

app.use(express.json());

app.use('/users', usersRoutes);

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server berhasil running di port ${PORT}`)
})