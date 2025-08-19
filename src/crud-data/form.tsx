import { useEffect, useState } from "react";
import { PostData, updateData, updatePost } from "../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }: { data: any, setData: any, updateDataApi: any, setUpdateDataApi: any }) => {
    const [isLoading, setIsLoading] = useState(false);

    // add data
    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });

    let isEmpty = Object.keys(updateDataApi).length === 0;
    useEffect(() => {
        updateDataApi && setAddData({
            title: updateDataApi.title || "",
            body: updateDataApi.body || "",
        });
    }, [updateDataApi]);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddData((prev) => {
            return { ...prev, [name]: value }
        });
    };
    const addPostData = async () => {
        try {
            setIsLoading(true);
            const res = await PostData(addData);
            console.log("res", res);
            if (res.status === 201) {
                setData([...data, res.data]);
                setAddData({
                    title: "",
                    body: "",
                });
            }
        } catch (error) {
            console.error("Error adding post:", error);
            alert("Failed to add post. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    // update post
    const updatePostData = async () => {
        try {
            const res = await updateData(updateDataApi.id, addData);
            console.log("res", res);
            if (res.status === 200) {
                setData((prev: any) => {
                    return prev.map((curElem: any) => {
                        return curElem.id === res.data.id ? res.data : curElem;
                    })
                })
                setAddData({
                    title: "",
                    body: "",
                });
                setUpdateDataApi({});
            }
        } catch (error) {
            console.error("Error updating post:", error);
            alert("Failed to update post. Please try again.");
        }
    }

    // form submission
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;
        addPostData();
        if (action === "Add") {
            addPostData();
        } else if (action === "Edit") {
            updatePostData();
        }
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit} className="flex p-3 bg-white/60 rounded-md gap-4 w-1/2 mx-auto mb-5">
                <div className="flex-1">
                    {/* <label htmlFor="title">Title</label> */}
                    <input
                        type="text"
                        placeholder="Add Title"
                        autoComplete="off"
                        id="title"
                        name="title"
                        value={addData.title}
                        onChange={handleInputChange}
                        className="w-full p-2 rounded-md bg-zinc-500 text-white"
                        disabled={isLoading}
                    />
                </div>
                <div className="flex-1">
                    {/* <label htmlFor="body">Body</label> */}
                    <input
                        type="text"
                        placeholder="Add Body"
                        autoComplete="off"
                        id="body"
                        name="body"
                        value={addData.body}
                        onChange={handleInputChange}
                        className="w-full p-2 rounded-md bg-zinc-500 text-white"
                        disabled={isLoading}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    value={isEmpty ? "Add" : "Edit"}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700"
                >
                    {isEmpty ? "Add" : "Edit"}
                </button>
            </form>
        </div>
    )
}