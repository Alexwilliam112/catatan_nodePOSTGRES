'use strict'

const View = require('../views/view')
const Model = require('../models/model')

class Controller {

    static async readBatches() {
        try {
            const data = await Model.readBatches()
            View.showTable(data)

        } catch (error) {
            View.printError(error)
        }
    }

    static async readStudents() {
        try {
            const data = await Model.readStudents()
            View.showTable(data)

        } catch (error) {
            View.printError(error)
        }
    }
}

module.exports = Controller