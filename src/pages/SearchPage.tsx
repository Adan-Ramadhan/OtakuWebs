import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import api from "../service/api"

const SearchPage = () => {


    const [isSearch, setIsSearch] = useState<any>([])
    const [formData, SetFormData] = useState<any>({
        search: "",

    })

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState(false);



    function handleChange(e: any) {
        const { name, value } = e.target

        SetFormData({
            ...formData,
            [name]: value
        })
    }


    async function handleSubmit(e: any) {
        e.preventDefault()
        console.log("masuk sini")
        setSuccess(false)
        setIsLoading(true)
        try {


            const res = await api.search(formData.search)

            if (!res.oke) throw new Error("Fail fetch anime")


            setSuccess(true)

            setIsSearch(res)
            SetFormData({ search: "" })
            console.log("res hasil search:", res)
        } catch (error: any) {
            console.log("fail to search anime", error.message)
        } finally {
            setIsLoading(false)
        }


    }

    console.log("ini hasil search", formData.search)
    console.log("ini hasil respon", isSearch)
    console.log("ini success ehek:", success)

    return (
        <div className="w-full">
            <div className="w-full md:w-3/4 md:mx-auto lg:w-1/2 p-3">

                <h3 >Search your fav anime here.</h3>
                <form onSubmit={handleSubmit} className="border rounded-lg border-slate-500 flex items-center gap-x-2 py-1 px-2">
                    <FaSearch />
                    <input
                        type="search"
                        name="search"
                        value={formData.search}
                        onChange={handleChange}
                        placeholder="search by title..."
                        className=" focus:outline-none w-full focus:ring-0"
                    />

                    <button type="submit" disabled={isLoading} className="font-semibold hover:text-orange-500 transition-all duration-300 ease-in-out">submit</button>
                </form>

                <div className="w-full">

                </div>
            </div>
        </div>
    )
}

export default SearchPage