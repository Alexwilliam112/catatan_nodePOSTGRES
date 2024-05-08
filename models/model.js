'use strict'

const Factory = require('./class')
const pool = require('../config/connection')

class Model {

    static async readBatches() {
        try {
            const sql = `
            SELECT * FROM "Batches"
            `

            const res = await pool.query(sql)
            const data = res.rows

            const instanceData = data.map((el) => {
                return Factory.createBatch(el.id, el.name)
            })

            return instanceData

        } catch (error) {
            throw error
        }
    }

    static async readStudents() {
        try {
            const sql = `
            SELECT 
            "Students".* , "Batches"."name" AS "BatchName"
            FROM "Students" JOIN "Batches" ON "Batches".id = "Students"."BatchId"
            `

            const res = await pool.query(sql)
            const data = res.rows

            const instanceData = data.map((el) => {
                return Factory.createStudent(el.id, el.name, el.dob, el.gender, el.firstCrush, el.BatchId, el.BatchName)
            })

            return instanceData

        } catch (error) {
            throw error
        }
    }
}

module.exports = Model