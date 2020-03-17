
exports.up = function(knex) {

    return knex.schema.createTable("cars", table =>{
        table.increments();
        table.string("Make", 255).index().notNullable();
        table.string("Model", 255).index().notNullable();
        table.integer("Year", 4).index().notNullable();
        table.string("VIN", 255).unique().index().notNullable();
        table.integer("Mileage", 255).index().notNullable();
        table.string("Transmission Type", 255).index();
        table.string("Title Status", 255).index();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};
