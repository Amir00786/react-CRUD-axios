export const Form = () => {
    return (
        <div>
            <form className="flex p-3 bg-white/60 rounded-md gap-4 w-1/2 mx-auto mb-5">
                <input type="text" placeholder="Title" className="w-full p-2 rounded-md bg-zinc-500 text-white" />
                <input type="text" placeholder="Body" className="w-full p-2 rounded-md bg-zinc-500 text-white" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Submit</button>
            </form>
        </div>
    )
}