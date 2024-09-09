import { createContext } from "react"
import { useState } from "react"
export const LoadingContext = createContext()

const LoadingPovider = ({children}) => {

  const [loading, setLoading] = useState(true)

  return (
    <LoadingContext.Provider value={{loading, setLoading}}>{children}</LoadingContext.Provider>
  )
}

export default LoadingPovider;