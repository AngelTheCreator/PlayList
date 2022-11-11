import { useEffect, useState } from "react";

export default function DisplayProto(){
    const[data, setData] = useState([])


    useEffect(() => {
        const SearchEndPoint = 'https://api.igdb.com/v4/games'
        const fetchData = async() => {
            const response = await fetch(SearchEndPoint, {
                method: 'POST',
                mode: 'no-cors',
                headers:{
                    "Access-Control-Allow-Origin": '*',
                    "Access-Control-Allow-Methods": '*',
                    "client_id" : "KEY_HERE",
                    "authorization" : 'Bearer KEY_HERE',
                    'Content-type': 'application/json',
                }
            })
            console.log("I am here:  " + response)
            const resData = await response.json()
            setData(resData)
        }
        fetchData()
    }, [])
    
    console.log(data)

    return(
        <div>

        </div>
    )
}