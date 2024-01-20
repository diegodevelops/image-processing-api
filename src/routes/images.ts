import express from 'express';

const images = express.Router()

images.use('/', (req, res) => {
    res.status(500).send('images route');
})

export default images;