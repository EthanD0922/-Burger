var orm = require("../config/orm.js");

var cat = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
};

module.exports = cat;