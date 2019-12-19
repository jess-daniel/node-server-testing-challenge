exports.up = function(knex) {
  return knex.schema.createTable("articles", tbl => {
    tbl.increments();

    tbl.string("title", 255).notNullable();

    tbl.string("text", 1000).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("articles");
};
