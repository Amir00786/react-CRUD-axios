import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

// get all method 
export const getPost = () => {
    return api.get("/posts");
}

// get single post
export const getPostById = (id: number) => {
    return api.get(`/posts/${id}`);
}

// post method (create)
export const PostData = (data: any) => {
    return api.post("/posts", data);
}

// put patch method (update)
export const updatePost = (id: number, data: any) => {
    return api.put(`/posts/${id}`, data);
}

// delete method
export const deletePost = (id: number) => {
    return api.delete(`/posts/${id}`);
}