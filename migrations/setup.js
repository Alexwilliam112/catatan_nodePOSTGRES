'use strict'

const pool = require('../config/connection')

async function setup() {
    try {
        const createBatches = `CREATE TABLE IF NOT EXISTS "Batches"(
            "id" SERIAL PRIMARY KEY,
            "name" VARCHAR NOT NULL
        );`

        const createStudents = `CREATE TABLE IF NOT EXISTS "Students"(
            "id" SERIAL PRIMARY KEY NOT NULL,
            "name" VARCHAR NOT NULL,
            "dob" DATE NOT NULL,
            "gender" VARCHAR NOT NULL,
            "firstCrush" VARCHAR NOT NULL,
            "BatchId" INTEGER NOT NULL,
                FOREIGN KEY ("BatchId")
                REFERENCES "Batches" ("id")
        );`

        const dropBatches = `DROP TABLE IF EXISTS "Batches";`
        const dropStudents = `DROP TABLE IF EXISTS "Students";`

        await pool.query(dropStudents)
        console.log(`Dropped Table STUDENTS`);

        await pool.query(dropBatches)
        console.log(`Dropped Table BATCHES`);

        await pool.query(createBatches)
        console.log('Success Create Table BATCHES');

        await pool.query(createStudents)
        console.log('Success Create Table STUDENTS');

    } catch (error) {
        console.log(error);
    }
}

setup()