import supertest from "supertest";

const req = supertest('https://dummyjson.com')

async function main () {
    const updatePost = {
        title: 'Good morning!',
        userId: 9
    }
    try {
        // const res = await req.post('/posts/add').send(updatePost)
        // console.log(res.body)
        
        const res = await req.get("/posts/2")

        // const res = await req.get("/posts/search?q=life")

        // const res = await req.get("/posts?limit=5&skip=5&select=title,reactions,userId")

        // const res = await req.get("/posts/user/7")

        // const res = await req.get("/posts/5/comments")

        // const res = await req.delete("/posts/1")
        console.log(res.body)
    } catch (error) {
        console.log(error)
    }
} 

main()