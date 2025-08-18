import { useEffect, useState } from "react";
import { PostData } from "../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }: { data: any, setData: any, updateDataApi: any, setUpdateDataApi: any }) => {
    const [isLoading, setIsLoading] = useState(false);

    // add data
    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });
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
                // Reset form after successful submission
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
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Only submit if both fields have values
        if (addData.title.trim() && addData.body.trim()) {
            addPostData();
        } else {
            alert("Please fill in both title and body fields.");
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
                    className="bg-blue-600 text-white px-4 py-2 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700"
                >
                    {isLoading ? "Adding..." : "Add Data"}
                </button>
            </form>
        </div>
    )
}