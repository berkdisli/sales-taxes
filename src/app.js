import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import TaxRate from './components/tax-rate'

const app = express();

mongoose.connect('mongodb://localhost');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// catch 400 error
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send(`Error: ${res.originUrl} not found`);
    next();
});

// catch 500 error
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send(`Error: ${err}`);
    next();
});

routes(app);

render(); {
    return (
        <TaxRate />
    )
}

export default app;