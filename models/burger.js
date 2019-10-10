var orm = require("../config/orm.js");

var burger = {

    read: function(callback) {
      orm.read("burgers", function(res) {
        callback(res);
      });
    },
    create: function(columns, values, callback){
        orm.create("burgers", columns, values, function(res){
            callback(res);
        })
    },
    update: function( object, condition, callback){
        orm.update("burgers", object, condition, function(res){
            callback(res);
        })
    },
    delete: function(condition, callback){
        orm.delete("burgers", condition, function(res){
            callback(res);  
        })
    }
};

module.exports = burger;