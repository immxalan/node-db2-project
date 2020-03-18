const express = require("express");

const db = require("../data/connection")

const router = express.Router();

router.get("/", (req, res) => {
    db("cars")
        .then(cars => res.status(200).json(cars))
        .catch(error => res.status(500).json({message: "Error retrieving cars"}))
})

router.get("/:id", (req, res) => {
   const {id} = req.params.id
    db("cars")
    .where({id})
    .first()
    .then(car => {if (car) {
        res.status(200).json(car)
    } else {res.status(404).json({message: "Car could not be found"})}
})
    .catch(error => res.status(500).json({message: "Error retrieving car"}))
})

router.post("/", (req, res) => {
    const carData = req.body;
    db("cars")
    .insert(carData, "id")
    .then(ids => 
        db("cars")
        .where({id: ids[0]})
        .then(newCarEntry => {
            res.status(201).json(newCarEntry)
        })
        )
        .catch(error => res.status(500).json({message: "Error posting car"}))
})

module.exports = router;