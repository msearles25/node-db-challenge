// I know, normally I would use the routes.

const express = require('express');

const Model = require('./models/model');

const server = express();

server.use(express.json());

server.get('/api/projects', (req, res) => {
    Model.findProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects.' });
          })
})

server.get('/api/projects/:id/tasks', (req, res) => {
    Model.findTasks(req.params.id)
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(() => {
            res.status(500).json({ message: 'Failed to get tasks.'})
        })
})

server.get('/api/projects/:id/resources', (req, res) => {
    Model.findResources(req.params.id)
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(() => {
            res.status(500).json({ message: 'Failed to get tasks.'})
        })
})

server.post('/api/projects', (req, res) => {
    const project = req.body
    Model.addProject(project)
        .then(project) (
            res.status(201).json(project)
        )
        .catch (err => {
            res.status(500).json({ message: 'Failed to create project.' });
          })
})

server.post('/api/tasks', (req, res) => {
    const task = req.body
    Model.addTask(task)
        .then(task) (
            res.status(201).json(task)
        )
        .catch (err => {
            res.status(500).json({ message: 'Failed to create task.' });
          })
})

server.post('/api/resources', (req, res) => {
    const resource = req.body
    Model.addResource(resource)
        .then(resource) (
            res.status(201).json(resource)
        )
        .catch (err => {
            res.status(500).json({ message: 'Failed to create resource.' });
          })
})

module.exports = server