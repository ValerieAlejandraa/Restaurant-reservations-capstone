const tables = require("./01-tables.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE tables RESTART IDENTITY CASCADE")
    .then(() => {
       return knex("tables").insert(tables);
    });
};

//npx knex seed:run to check your database in DBeaver and see if the tables have been populated with the seed data!