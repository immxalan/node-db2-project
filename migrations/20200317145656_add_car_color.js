
exports.up = function(knex) {
  return knex.schema.table("cars", table => {
      table.string("Color", 255)
  })
};

exports.down = function(knex) {
  return knex.schema.table("cars", table => {
      table.dropColumn("color")
  })
};
