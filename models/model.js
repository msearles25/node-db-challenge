const db = require('../data/dbConfig');

// I know, I should create different files for different models, but it's a super small project.

module.exports = {
    findProjects,
    addProject,
    findTasks,
    addTask,
    findResources,
    addResource
}

// working
function findProjects() {
    return db('projects')
}

// working
function addProject(project) {
    return db('projects')
        .returning('id')
        .insert(project)
        // .then(([id]) => {
        // })
}

function findTasks(project_id) {
    return db('tasks')
        .join('projects', 'projects.id', 'tasks.project_id')
        .select(
            'projects.name as projectName', 
            'projects.description as projectDescription', 
            'tasks.description as task',
            'tasks.notes as taskNotes',
            'tasks.completed as taskComplete'
        )
        .where({ project_id })
}

function addTask(task) {
    return db('tasks')
        .returning('id')
        .insert(task)
}

function findResources(project_id) {
    return db('project_resources')
        .join('projects', 'projects.id', 'project_resources.project_id')
        .join('resources', 'resources.id', 'project_resources.resource_id')
        .select('resources.name', 'resources.description')
        .where({ project_id })
        
}

function addResource(resource) {
    return db('project_resources')
        .returning('id')
        .insert(resource)
}