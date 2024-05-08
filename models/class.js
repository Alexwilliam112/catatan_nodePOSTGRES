'use strict'

class Batch {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

class Students {
    constructor(id, name, dob, gender, firstCrush, BatchId, BatchName) {
        this.id = id
        this.name = name
        this.dob = dob
        this.gender = gender
        this.firstCrush = firstCrush
        this.BatchId = BatchId
        this.BatchName = BatchName
    }
}

class Factory {

    static createBatch(id, name) {
        return new Batch(id, name)
    }

    static createStudent(id, name, dob, gender, firstCrush, BatchId, BatchName) {
        return new Students(id, name, dob, gender, firstCrush, BatchId, BatchName)
    }
}

module.exports = Factory