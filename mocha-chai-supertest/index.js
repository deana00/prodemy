import supertest from "supertest";

const req = supertest('https://dummyjson.com')

async function main () {
    const updatePost = {
        title: 'Good morning!'
    }
    try {
        const res = await req.put('/posts/8').send(updatePost)
        console.log(res.body)
    } catch (error) {
        console.log(error)
    }
} 

main()