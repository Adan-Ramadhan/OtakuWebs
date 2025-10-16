import { useEffect, useState } from "react"
import api from "../service/api"
import { Link } from "react-router-dom"


type ongoingType = {
    judul: string
    gambar: string
    slug: string
}

const OngoingPage = () => {

    const [isOngoing, setIsOngoing] = useState<ongoingType[]>([])
    const [isPage, setIsPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {

        async function fetchOngoing() {
            setLoading(true)
            try {
                const data = await api.getAnimeOngoing("ongoing", isPage)

                setIsOngoing(data)
            } catch (error) {
                console.error("Error fetching ongoing:", error);
            } finally {
                setLoading(false)
            }
        }
        console.log(isOngoing)
        console.log(isPage)

        fetchOngoing()

    }, [isPage])




    return (
        <div className="w-full">
            <div className="w-full p-3">
                <div className="w-full text-center mb-5">

                    <h1 className="font-semibold text-2xl">On Going</h1>
                </div>
                {loading ? (

                    <div>Loading...</div>
                ) : (
                    <div className="mb-5 grid grid-cols-2 gap-5" >
                        {isOngoing.map((ongoing, i) => (
                            <Link key={i} to={`/anime/${ongoing.slug}`}>
                                <div className="w-full h-full rounded-lg overflow-hidden ">
                                    <img src={ongoing.gambar} alt={ongoing.judul} className="w-full h-64 object-cover" />
                                    <p className="text-sm font-semibold p-3">{ongoing.judul}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}



                <div className="flex justify-center mt-6 gap-4">
                    <button
                        disabled={isPage === 1}
                        onClick={() => setIsPage((prev) => prev - 1)}
                        className="bg-orange-500  px-4 py-1 text-sm rounded disabled:opacity-50"
                    >
                        Prev
                    </button>

                    <span>Page {isPage}</span>

                    <button
                        onClick={() => setIsPage((prev) => prev + 1)}
                        className="bg-orange-500  px-4 py-1 text-sm rounded"
                    >
                        Next
                    </button>
                </div>
            </div>

        </div>
    )
}

export default OngoingPage