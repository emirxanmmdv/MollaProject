import React from 'react'

const useFetch = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const FetchData = async () => {
            const response = await fetch(url);
            const jsondata = await response.json()
            setData(jsondata)
        };
        FetchData() 
    }, [url]);
    
    return [data]

}

export default useFetch