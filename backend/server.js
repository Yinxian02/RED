const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const requireAuth = require("./middleware/requireAuth")

var bodyparser = require("body-parser");

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5001;

app.use(bodyparser.json({limit: '500kb'}));
// Cross Origin Resource Sharing
app.use(cors(corsOptions));
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// routes
app.use('/signup', require('./routes/signup'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

app.use(requireAuth);
// app.use('/users', require('./routes/api/users'));
app.use('/exercises', require('./routes/api/exercises'));
app.use('/projects', require('./routes/api/projects')); 
app.use('/fundraisers', require('./routes/api/fundraisers')); 

app.listen(port || 3000, () => {
    console.log(`Server is running on port: ${port}`);
});