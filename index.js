// Import packages
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
// App
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
    if (err.status === 400)
        return res.status(err.status).json({ error: "Could not decode request: JSON parsing failed" });

    return next(err);
});

app.use("/", require('./api'));

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});