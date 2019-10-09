var connection = require("../config/connection.js");

function questionMarks(length) {
    var array = [];
  
    for (var i = 0; i < length; i++) {
      array.push("?");
    }
  
    return array.toString();
  }

var orm = {
    all: function(table, callback) {
        connection.query("SELECT * FROM " + table + ";", function (err, res){
            if (err) throw err;

            callback(res)
        })
    },
    create: function(table, columns, values, callback){
        connection.query("INSERT INTO "+ table +
        "(" + columns.toString() + ") VALUES (" +
        questionMarks(values.length) + ");", values, function (err, res){
            if (err) throw err;

            callback(res)
        })
    }
}


module.exports = orm;