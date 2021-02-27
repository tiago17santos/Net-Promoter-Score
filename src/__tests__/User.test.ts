import { response } from 'express';
import request from 'supertest';
import { app } from '../app';

import createConnection from "../database"

describe ("Users", () => {
    beforeAll(async () => {
        const  connection = await createConnection()
        await connection.dropDatabase()
        await connection.runMigrations()
    })

    it("Should be able to create a new user", async() => {
        const response = await request(app).post("/users")
        .send({
            email: "user@example.com",
            name: "User name"
        })    
        
        expect(response.status).toBe(201)    
    })

    it("Should not be able to creat a new user with exists e-mail", async() => {
        const response = await request(app).post("/users")
        .send({
            email: "user@example.com",
            name: "User name"
        })
        expect(response.status).toBe(400)
    })
})