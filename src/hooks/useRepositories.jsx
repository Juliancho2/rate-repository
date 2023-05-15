import { useEffect, useState } from "react"
import ENV from "../env"


const useRepositories = () => {
    const [repositories, setRepositories] = useState(null)
    const fetRepositories = async () => {
      const response = await global.fetch(ENV.API_URL)
      const json = await response.json()
      setRepositories(json)
    }
    useEffect(() => {
      fetRepositories()
    }, [])
    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node)
      : []
  
      return {repositories:repositoryNodes,setRepositories}
  }

  export default useRepositories
