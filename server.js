//********** DEPENDENCIES *********************************************************************************//

const express = require("express"); // web server
const mongoose = require("mongoose"); //database
const dbConfig = require("./db/config"); //database 
const routes = require("./routes")//api router

//REMOTE DB HOSTING: 


//********* SERVER CONFIG *********************************************************************************//

const app = express();
const PORT = process.env.PORT || 3001; //deployed port OR proxy port [REACT];

app.use(express.urlencoded({ extended: true })); //handle post requests
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); //serve static directory when deployed
}

app.use(routes) //API routes


//********** SYNC-DB ***********************************************************************************//

mongoose.connect("mongodb+srv://kdurga:kdurga@gitcloud-hed4v.gcp.mongodb.net/test?retryWrites=true&w=majority" || "mongodb://localhost/devNetwork_DB", dbConfig.settings);
app.listen(PORT, function() {
  console.log(`API Server listening on port:${PORT}!`);
});
