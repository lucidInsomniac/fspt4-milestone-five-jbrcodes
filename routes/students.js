/**********************Boiler Plate*********************** */

var express = require("express");
var router = express.Router();
const db = require("../model/helper");
//Missing body parser for JSON
const bodyParser = require("body-parser");

/***************************Middleware****************** */

//converts JSON req to JS format for server
router.use(bodyParser.json());

//test api works
//GET a homepage
router.get("/", (req, res) => {
  //send message back once connected
  res.send({ message: "You made it to the other side of the API" });
});
//local:5000 port reads {"msg": "Error"}

// GET student list
//async needs await to keep server open
router.get("/facebook", async (req, res) => {
  //try and catch errors in code
  try {
    //data must already exist a table in MYSQL, use MYSQL command
    let results = await db("SELECT * FROM students;");
    //check what result is
    console.log("results", results);
    //return status response 200 OK and full list of students
    res.status(200).send(results.data);
  } catch (err) {
    //catch any errors with status 500 network error and err.msg
    res.status(500).send({ error: err.message });
  }
});

// GET one student
router.get("/facebook/:id", async (req, res) => {
  //get id from URL
  let id = req.params.id;
  //mysql command to request id from selected table students
  let sql = `
    SELECT *
    FROM students
    WHERE id = ${id}
  `;

  //try and catch errors:
  try {
    //insert data matching id
    let results = await db(sql);
    //returns response status 200 OK and data OBJ, not ARRAY for students
    res.send(results.data[0]);
  } catch (err) {
    //catch any errors with status 500 network error and err.msg
    res.status(500).send({ error: err.message });
  }
});

// INSERT a new student into the DB
router.post("/facebook", async (req, res) => {
  //{ designate column(s) }  is from the request body
  let { firstname, lastname } = req.body;
  //mysql command to insert into students (column(s)) with values (if string use "")
  let sql = `
    INSERT INTO students (firstname, lastname)
    VALUES ('${firstname}', '${lastname}')
  `;
  //try and catch errors in code
  try {
    //data must already exist a table in MYSQL, use MYSQL command
    let results = await db("SELECT * FROM students;");
    //check what result is
    console.log("results", results);
    //return status response 201 data item created and full list of students
    res.status(201).send(results.data);
  } catch (err) {
    //catch any errors with status 500 network error and err.msg
    res.status(500).send({ error: err.message });
  }
});

// DELETE a student from the DB
router.delete("/facebook/:id", async (req, res) => {
  //get id from URL
  try {
    //data must already exist a table in MYSQL, use MYSQL command
    let results = await db(`SELECT * FROM students WHERE id = ${id}`);
    //insert data request
    let results = await db(sql);
    //if DB finds array with length of 1, continues with request
    if (results.data.length === 1) {
      //sends another request to delete from students with matching id
      sql = `DELETE FROM students id = ${id}`;
      //insert data to send back
      await db(sql);
      //request to select from students table
      results = await db("SELECT * FROM students");
      //return status response 20 OK and full list of students
      res.status(200).send(results.data);
      // else 404 status with server error
    } else {
      res.status(404).send({ error: "Whomp Whomp Whomp...." });
    }
    //catch any errors with status 500 int network error and err.msg
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//PUT update students

module.exports = router;
