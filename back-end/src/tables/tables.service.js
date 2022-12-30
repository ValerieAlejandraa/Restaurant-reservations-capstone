const { table } = require("../db/connection");
const knex = require("../db/connection");

//returns all tables sorted by table name
function list(){
    return knex("tables")
    .select("*")
    .orderBy("table_name")
}


async function create(newTable) {
    return await knex("tables")
      .insert(newTable)
      .returning("*")
      .then((createdRecords) => createdRecords[0]);
  }

//The create() function creates a Knex query that inserts a new table into the table while returning all columns from the newly inserted row (because of returning(*)). 
//The .insert() method of Knex can be used to insert more than one record, so it returns an array of the records inserted. 
//For this API, only one table will ever be inserted at a time so you chain .then((createdRecords) => createdRecords[0]); } onto the query to return only the one inserted record.


function read(table_id){
    return knex("tables")
    .select("*")
    .where({ table_id })
    .first()
}

async function update(updatedTable) {
    return await knex("tables")
      .select("*")
      .where({ table_id: updatedTable.table_id })
      .update(updatedTable, "*")
      .then((updatedRecords) => updatedRecords[0]);
  }
  
  function getReservation(reservation_id) {
    return knex("reservations").select("*").where({ reservation_id }).first();
  }

module.exports = {
    create,
    list,
    read,
    getReservation,
    update
}