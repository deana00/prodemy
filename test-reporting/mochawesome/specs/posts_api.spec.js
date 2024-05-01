import * as chai from "chai"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"
import supertest from "supertest"

import {
    postSchema, postsSchema,
    limitSkipSchema, commentsSchema,
    deletePostSchema
}
    from "../schemas/postsSchema.js"


chai.use(chaiJsonSchemaAjv)

const { expect } = chai

const req = supertest('https://dummyjson.com')

describe("Posts API", () => {
    // GET all posts
    it("Get a All Posts API", async () => {
        try {
            const res = await req.get("/posts")
            expect(res.body).to.be.jsonSchema(postsSchema)
        } catch (error) {
            console.log("Error API request", error)
        }
    })

    // GET a post
    it("Get a Single Post API", async () => {
        try {
            const res = await req.get("/posts/2")
            expect(res.body).to.be.jsonSchema(postSchema)
        } catch (error) {
            console.log("Error API request", error)
        }
    })

    // GET all posts by search
    it("Search Posts API", async () => {
        try {
            const res = await req.get("/posts/search?q=life")
            expect(res.body).to.be.jsonSchema(postsSchema)
        } catch (error) {
            console.log("Error API request", error)
        }
    })

    // GET all posts by limit and skip
    it("Limit and Skip Posts API", async () => {
        try {
            const res = await req.get("/posts?limit=5&skip=5&select=title,reactions,userId")
            expect(res.body).to.be.jsonSchema(limitSkipSchema)
        } catch (error) {
            console.log("Error API request", error)
        }
    })

    // GET all posts by User ID
    it("Get All Posts by User ID API", async () => {
        try {
            const res = await req.get("/posts/user/7")
            expect(res.body).to.be.jsonSchema(postsSchema)
        } catch (error) {
            console.log("Error API request", error)
        }
    })

    // GET comments of post 
    it("Get Posts's Comments API", async () => {
        try {
            const res = await req.get("/posts/1/comments")
            expect(res.body).to.be.jsonSchema(commentsSchema)
        } catch (error) {
            console.log("Error API request", error)
        }
    })

    // POST post
    it("Add a new Post API", async () => {
        const addPost = {
            title: 'Good evening!',
            userId: 10
        }

        try {
            const res = await req
                .post("/posts/add")
                .send(addPost)
            expect(res.body).to.be.jsonSchema(postSchema)
        } catch (error) {
            console.log("Error API request", error)
        }
    })

    // UPDATE post
    it("Update a Post API", async () => {
        const updatePost = {
            title: 'Good morning!'
        }

        try {
            const res = await req
                .put("/posts/1")
                .send(updatePost)
            expect(res.body).to.be.jsonSchema(postSchema)
        } catch (error) {
            console.log("Error API request", error)
        }
    })

    // DELETE post
    it("Delete a Post API", async () => {
        try {
            const res = await req.delete("/posts/1")
            expect(res.body).to.be.jsonSchema(deletePostSchema)
        } catch (error) {
            console.log("Error API request", error)
        }
    })
})
