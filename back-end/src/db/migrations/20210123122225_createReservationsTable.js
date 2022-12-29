exports.up = function (knex) {
  return knex.schema.createTable("reservations", (table) => {
    table.increments("reservation_id").primary();
    table.timestamps(true, true);//created_at and updated_at columns, passing true as the first argument sets the columns to be a timestamp , passing true as the second argument sets those columns to be non-nullable and to use the current timestamp by default
    table.string("first_name").notNullable();//table.string is the column
    table.string("last_name").notNullable();
    table.string("mobile_number").notNullable();
    table.string("reservation_date").notNullable();
    table.string("reservation_time").notNullable();
    table.integer("people").unsigned().notNullable(); //unsigned: you cannot insert negative numbers
    table.string("status").notNullable().defaultTo("booked");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reservations");
};

//this is reservations/new
//The Knex migrations folder.
//The exports.up and exports.down functions should always return a promise.