
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { 
          project_id: 1, 
          description: 'This is a task for the first projet yo!', 
          notes: 'uhmmmmmmmmmm',
          completed: 'true'
        },
        { 
          project_id: 1, 
          description: 'Another task.',
          completed: 'false'
        },
        { 
          project_id: 2, 
          description: 'Look another task.',
          notes: 'uhh yes I have notes',
          completed: 'true'
        },
        { 
          project_id: 2, 
          description: 'Finsih this project already.',
          notes: 'I\'m running out of ideas now.',
          completed: 'true'
        },
        { 
          project_id: 2, 
          description: 'Are we there yet?',
          notes: 'Look another note.',
          completed: 'true'
        },
        { 
          project_id: 3, 
          description: 'What am I even typing?',
          notes: 'I\'m running out of ideas now.',
          completed: 'false'
        },
        { 
          project_id: 3, 
          description: 'Task for number 3.',
          notes: 'I\'m running out of ideas now.',
          completed: 'false'
        },
        { 
          project_id: 3, 
          description: 'Final task.',
          notes: 'I\'m running out of ideas now.',
          // completed: 'false' //test for default yo
        },
      ]);
    // });
};
