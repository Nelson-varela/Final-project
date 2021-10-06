const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// settings
app.set('port', process.env.PORT || 5000);

// middlewares 
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use(express.json());

// routes
app.use('/api/posts', require('./routes/postNewsRoute'));
app.use('/api/novelties', require('./routes/noveltyRoute'));
app.use('/api/users', require('./routes/userRoute')) 



module.exports = app;
