const reservations = require("./00-reservations.json")
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE reservations RESTART IDENTITY CASCADE")
    .then(function(){
      return knex("reservations").insert(reservations)
  });
};

//seed the reservations table with the data contained in ./back-end/src/db/seeds/00-reservations.json