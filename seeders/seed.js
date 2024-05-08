'use strict'

const pool = require('../config/connection')
const { readFile } = require('fs').promises

async function seed() {
    try {
        const batches = JSON.parse(await readFile('./data/batches.json', 'utf-8')).map((el) => {
            const { name } = el
            return `('${name}')`
        }).join(",\n")

        const insertBatches = `
INSERT INTO "Batches" ("name")
VALUES
${batches}
        `

        const students = JSON.parse(await readFile('./data/students.json', 'utf-8')).map((el) => {
            const { name, dob, gender, firstCrush, BatchId } = el
            return `('${name}', '${dob}', '${gender}', '${firstCrush}', '${BatchId}')`
        }).join(",\n")

        const insertStudents = `
INSERT INTO "Students" ("name", "dob", "gender", "firstCrush", "BatchId")
VALUES
${students}
        `

        await pool.query(insertBatches)
        console.log(`Data Inserted : BATCHES`);

        await pool.query(insertStudents)
        console.log(`Data Inserted : STUDENTS`);

    } catch (error) {
        console.log(error);
    }
}

seed()