
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { 
          name: 'This is a project', 
          description: 'This is the description', 
          completed: false
        },
        { 
          name: 'This is another project yo', 
          description: 'This is supposed to be the description, but I don\'t have one.', 
          completed: false
        },
        { 
          name: 'And another one', 
          description: 'What?!', 
          completed: true
        }
      ]);
    // });
};
