var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.read(function (data) {res.render("index", {burgers:data})
        })
});

router.post("/api/burgers", function(req, res){
    burger.create("burger_name", req.body.name, function(data){
        res.json(data);
    })
});

router.put("/api/burgers/:id", function(req, res){
    burger.update({devoured: req.body.devoured}, "id = " + req.params.id, function(data){
        res.json(data);
    })
});

router.delete("/api/burgers/:id", function(req, res){
    burger.delete("id = " + req.params.id, function(data){
        if (data == 0){
            res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    })
});

module.exports = router;