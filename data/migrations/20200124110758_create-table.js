
exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
      table.increments();
      table.string('name')
           .notNullable();
      table.string('description');
      table.boolean('completed')
           .notNullable()
           .defaultTo(false);
  })
  .createTable('tasks', table => {
      table.increments();
      table.integer('project_id')
           .unsigned()
           .notNullable()
           .references('id')
           .inTable('projects')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
      table.string('description')
           .notNullable();
      table.string('notes');
      table.boolean('completed')
      .notNullable()
      .defaultTo(false);
  })
  .createTable('resources', table => {
        table.increments();
        table.string('name')
             .notNullable();
        table.string('description');
  })
  .createTable('project_resources', table => {
        table.increments();
        table.integer('project_id')
             .unsigned()
             .notNullable()
             .references('id')
             .inTable('projects')
             .onUpdate('CASCADE')
             .onDelete('RESTRICT')
        table.integer('resource_id')
             .unsigned()
             .notNullable()
             .references('id')
             .inTable('resources')
             .onUpdate('CASCADE')
             .onDelete('RESTRICT')
  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};  
