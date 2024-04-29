require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDb = require('./config/connectToDb.js');
const Note = require("./models/note.js");
const employees = require("./models/eployees.js")
const drinks = require("./module.drinks.js")
const notesController = require("./controllers/notesController.js");
const employeesController = require("./controllers/employeesControllers.js")
const drinksController = require("./controller/drinksConrollers.js")
const cors = require('cors');


app.use(express.json());
app.use(cors());

connectToDb()


// -------------------------------Routes
app.get("/",(req,res) => {
    res.send("Landing page")
})

// ------------------------Notes model-----------
// ------------------------------Read

app.get("/notes", notesController.fetchAllNotes)

app.get("/notes/:id", notesController.fetchNote)

// ----------------------------Create
app.post("/notes", notesController.createNote)

// ------------------------------Update
app.put("/notes/:id", notesController.updateNote )

// -------------------------------Delete
app.delete("/notes/:id", notesController.deleteNote)

// ------------------------employees model-----------
// ------------------------------Read

app.get("/employees", empolyeesController.fetchAllEmployes)

app.get("/employees/:id", employeesController.fetchemployee)

// ----------------------------Create
app.post("/employees", employeesController.createEmployee)

// ------------------------------Update
app.put("/employees/:id", epmloyeesController.updateEmployee )

// -------------------------------Delete
app.delete("/employees/:id", employeesController.deleteEmployee)

// ------------------------drinks model-----------
// ------------------------------Read

app.get("/drinks", drinksController.fetchAllDrinks)

app.get("/drinks/:id", drinksController.fetchDrink)

// ----------------------------Create
app.post("/drinks", drinksController.createDrink)

// ------------------------------Update
app.put("/drinks/:id", drinksController.updateDrink )

// -------------------------------Delete
app.delete("/drinks/:id", drinksController.deletedrink)





app.listen(PORT,() => {
    console.log(`Express Server Listening on port num: ${PORT}`)
})