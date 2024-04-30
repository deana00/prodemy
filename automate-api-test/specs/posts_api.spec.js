import * as chai from "chai"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"
import supertest from "supertest"

import posts from "../schemas/posts_schema.js"
import post from "../schemas/post_schema.js"
import limitSkip from "../schemas/limitSkip_schema.js"
import comments from "../schemas/comments_schema.js"
import delPost from "../schemas/delPost_schema.js"


chai.use(chaiJsonSchemaAjv)

const { expect } = chai

const req = supertest('https://dummyjson.com')

describe("Posts API", () => {
    // GET all posts
    it("Get a All Posts API", async () => {
        const res = await req.get("/posts")
        expect(res.body).to.be.jsonSchema(posts)
    })

    // GET a post
    it("Get a Single Post API", async () => {
        const res = await req.get("/posts/2")
        expect(res.body).to.be.jsonSchema(post)
    })

    // GET all posts by search
    it("Search Posts API", async () => {
        const res = await req.get("/posts/search?q=life")
        expect(res.body).to.be.jsonSchema(posts)
    })

    // GET all posts by limit and skip
    it("Limit and Skip Posts API", async () => {
        const res = await req.get("/posts?limit=5&skip=5&select=title,reactions,userId")
        expect(res.body).to.be.jsonSchema(limitSkip)
    })

    // GET all posts by User ID
    it("Get All Posts by User ID API", async () => {
        const res = await req.get("/posts/user/7")
        expect(res.body).to.be.jsonSchema(post)
    })

    // GET comments of post 
    it("Get Posts's Comments API", async () => {
        const res = await req.get("/posts/1/comments")
        expect(res.body).to.be.jsonSchema(comments)
    })
    
    // POST post
    it("Add a new Post API", async () => {
        const addPost = {
            id: 5,
            title: 'Good evening!',
            userId: 10
        }

        const res = await req
            .post("/posts/add")
            .send(addPost)
        expect(res.body).to.be.jsonSchema(post)
    })

    // UPDATE post
    it("Update a Post API", async () => {
        const updatePost = {
            title: 'Good morning!'
        }

        const res = await req
            .put("/posts/1")
            .send(updatePost)
        expect(res.body).to.be.jsonSchema(post)
    })

    // DELETE post
    it("Delete a Post API", async () => {
        const res = await req.delete("/posts/1")
        expect(res.body).to.be.jsonSchema(delPost)
    })

})
