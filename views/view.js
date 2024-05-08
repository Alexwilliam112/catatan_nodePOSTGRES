'use strict'

class View {

    static printError(error) {
        console.log(error);
    }

    static showTable(data) {
        console.table(data)
    }
}

module.exports = View