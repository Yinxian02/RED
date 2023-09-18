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
mongoose.connect(uri, { useNewUrlParser: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const fundraisersRouter = require('./routes/fundraisers');

app.use('/users', usersRouter);
app.use(requireAuth);
app.use('/exercises', exercisesRouter);
app.use('/projects', projectsRouter); 
app.use('/fundraisers', fundraisersRouter); 

app.listen(port || 3000, () => {
    console.log(`Server is running on port: ${port}`);
});