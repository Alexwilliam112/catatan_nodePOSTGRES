'use strict'

const Controller = require('./controllers/controller')
const commands = process.argv.slice(2)
const cmd = commands[0]

switch (cmd) {
    case 'batches': {
        Controller.readBatches()
        break;
    }

    case 'students': {
        Controller.readStudents()
        break;
    }

    case value: {
        break;
    }

    default:
        return
}