const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var bodyparser = require("body-parser");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyparser.json({limit: '500kb'}));
app.use(cors());
app.use(express.json());

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

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter); 
app.use('/fundraisers', fundraisersRouter); 

app.listen(port || 3000, () => {
    console.log(`Server is running on port: ${port}`);
});