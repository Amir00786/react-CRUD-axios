import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";

export const CrudData = () => {

    const [data, setData] = useState([]);
    const getPostData = async () => {
        const res = await getPost();
        // console.log(res.data);
        setData(res.data);
    }


    useEffect(() => {
        getPostData();
    }, []);

    // delete post

    const handleDeletePost = async (id: number) => {
        try {
            const res = await deletePost(id);
            if (res.status === 200) {
                const newupdatedPost = data.filter((curPost: any) => {
                    return curPost.id !== id;
                });
                setData(newupdatedPost);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <ul className="grid grid-cols-3 gap-4">
                {
                    data.map((curElem) => {
                        const { id, title, body } = curElem;
                        return (
                            <li key={id} className="flex flex-col gap-4 bg-black/50 p-4 text-white rounded-md border-l-4 border-blue-600">
                                <div className="flex flex-col gap-2 min-h-48">
                                    <span className="text-blue-600 text-sm font-bold">ID: {id}</span>
                                    <h2>Title: {title}</h2>
                                    <p>Body: {body}</p>
                                </div>
                                <div className="flex gap-4">
                                    <button className="bg-blue-600 w-[40%] cursor-pointer hover:bg-blue-600/80 hover:shadow-[0px_7px_19px_0px_rgb(37,99,235)] transition-all duration-500 text-white px-4 py-2 rounded-md">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDeletePost(id)} className="bg-red-600 w-[40%] cursor-pointer hover:bg-red-600/80 hover:shadow-[0px_7px_19px_0px_rgb(220,38,38)] transition-all duration-500 text-white px-4 py-2 rounded-md">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}