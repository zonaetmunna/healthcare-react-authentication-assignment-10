
import { useEffect, useState } from "react"

const useDetails = () => {
     const [details, setDetails] = useState({})
     useEffect(() => {
          fetch('/Service.json')
               .then(res => res.json())
               .then(data => setDetails(data[0]))
     }, [])

     return [details];
}
export default useDetails;
