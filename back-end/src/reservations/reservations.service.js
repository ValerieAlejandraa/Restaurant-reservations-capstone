const knex = require("../db/connection")


function list(){
    return knex 
       .select("*")
       .from("reservations")
}


module.exports= {
    list,
}