var express = require('express');
var router = express.Router();
const mysql = require('mysql');
// var cors = require("cors");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
//   console.log("AKUMAR");
// });

// Trying to establish connection with the mySQL DataBase
// const app = express();
// app.use(express.json());
// app.use(cors())
// app.use(express.json());

const connection = mysql.createConnection({
  host:"localhost",
  user: "root",
  password: "TestApp123",
  database: "userDB",
  port:"3306"
});

//cross checking if the connection was successful 
connection.connect((err) => {
    if(err){
      throw err;
    } 
    else {
      console.log("connected")
    }
  })

// passign values to the database 
  router.post("/register", (req, res) => {
    const u = req.body.username;
    const p = req.body.password;
    connection.query(
      "INSERT INTO userDB.login (username, password) VALUES (?,?)", 
        [u, p],
      (err, result) => {
        console.log(err);
    }
    );
  });

  router.post("/login", (req, res)=>{
    console.log("Reched the route");
    const u = req.body.username;
    const p = req.body.password;
    connection.query(
      "SELECT * FROM userDB.login WHERE username = ? AND password = ?", 
        [u, p],
      (err, result) => {
        if (err){

          res.send({err: err});
          console.log("Something went wrong with the route");
        }
        // else {
          if (result.length > 0){
            res.send(result);
          }
          else {
            res.send({message:"no user found Sorry ! May be wrong username and password "});
          }

        // } ldcjosdj sawdd  :Lsc res.send ({message: " User Found Congratulations!"});
        
    }
    );

  })

module.exports = router;
