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
// app.use(cors());

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
  router.post("/", (req, res) => {
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

module.exports = router;
