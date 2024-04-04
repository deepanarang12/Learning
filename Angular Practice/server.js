const { error } = require('console');
const express = require('express')
const app = express ()
const mongoose = require('mongoose');
const { connect } = require('undici-types');
mongoose.set('strictquery',false);


app.listen(9992,function check(err)
{
if (err) 
    console.log("error")
else
    console.log("started")
});




// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Login", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},

function checkDb(error)
{
if(error)
{
  console.log('Connected to MongoDB');
}
else
{
    console.log('successfully connection to db');
}
});

// Export the database connection
module.exports = db;