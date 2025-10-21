import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import api from "../service/api"

const SearchPage = () => {


    const [isSearch, setIsSearch] = useState<any>({
        search: ""
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<string | null>(null);



    function handleChange(e: any) {
        const { name, value } = e.target

        setIsSearch({
            ...isSearch,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        api.search(isSearch)

    }

    console.log("ini hasil search", isSearch)

    return (
        <div className="w-full">
            <div className="w-full p-3">

                <h3>Search your fav anime here.</h3>
                <form onSubmit={handleSubmit} className="border rounded-lg border-slate-500 flex items-center gap-x-2 py-1 px-2">
                    <FaSearch />
                    <input
                        type="search"
                        name="search"
                        value={isSearch.search}
                        onChange={handleChange}
                        placeholder="search by title..."
                        className=" focus:outline-none focus:ring-0"
                    />
                </form>

                <div className="w-full">

                </div>
            </div>
        </div>
    )
}

export default SearchPage