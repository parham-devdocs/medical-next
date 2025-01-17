import { Post } from "@/types"

export async function fetchPosts(page:number,perPage:number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=${perPage}`)
    const posts: Post[] = await res.json()
    const totalPosts = parseInt(res.headers.get("x-total-count") || "0");
    console.log(res.headers)
    return {posts,totalPosts}
}