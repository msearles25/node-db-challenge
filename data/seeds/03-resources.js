
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { 
          name: 'Computer', 
          description: 'It\'s a computer.'
        },
        { 
          name: 'Pencil', 
          description: 'You always need a pencil.'
        },
        { 
          name: 'Book'
        },
        { 
          name: 'Another resource', 
          description: 'yes. wait, no. wait, what?'
        },
        { 
          name: 'ANOTHER ONE', 
          description: 'this is a description.'
        },
      ]);
    // });
};
