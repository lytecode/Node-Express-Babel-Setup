import express from 'express';

const app = express();


app.get('/', (req, res) => res.send("Hello Babel is working yeah! yeah!!"));


app.listen(3000, () => console.log('app started on port 3000 ...'));