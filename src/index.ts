import express from 'express';

const app = express();
const port = 3000;

app.get('/images', (req, res) => {
    res.status(500).send('havent built resizing feature')
})

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})

// for supertest
export default app;