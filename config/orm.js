var connection = require("../config/connection.js");

function questionMarks(length) {
    var array = [];
  
    for (var i = 0; i < length; i++) {
      array.push("?");
    }
  
    return array.toString();
  }

  //used this from the cats example /14-handlebars/activities/17-CatsApp with some var changes to help me understand it.
  function SQLobject(object) {
    var arr = [];

    for (var key in object) {
      var value = object[key];

      if (Object.hasOwnProperty.call(object, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }

var orm = {
    read: function(table, callback) {
        connection.query("SELECT * FROM " + table + ";", function (err, results){
            if (err) throw err;

            callback(results);
        });
    },
    create: function(table, columns, values, callback){
        connection.query("INSERT INTO "+ table +
        " (" + columns.toString() + ") VALUES (" +
        questionMarks(values.length) + ");", values, function (err, res){
            if (err) throw err;

            callback(res)
        });
    },
    update: function(table, object, condition, callback){
        connection.query("UPDATE " + table + " SET " + SQLobject(object) + " WHERE " + condition + ";", function (err, res){
            if (err) throw err;

            callback(res);
        });
    },
    delete: function(table, condition, callback){
        connection.query("DELETE FROM " + table + " WHERE " + condition, function(err, res){
            if (err) throw err;

            callback(res);
        });
    }
}


module.exports = orm;