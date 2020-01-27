const model = require('./models/model');

const task = {
    project_id: 3,
    description: 'test',
    notes: 'test'
}

const resource = {
    project_id: 1,
    resource_id: 5
}

model.addResource(resource).then(res => {
    console.log(res)
    process.exit();
})
