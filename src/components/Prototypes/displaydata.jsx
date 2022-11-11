import { useEffect, useState } from "react";
import igdb from 'igdb-api-node';

export default function DisplayProto(){
    const[data, setData] = useState([])
    useEffect(() => {
        async function igdb(){
            const response = await igdb()
            .fields('*')
            .limit(50)
        setData(response.data)
    }
        igdb()

    }, [])


    // useEffect(() => {
    //     const SearchEndPoint = 'https://api.igdb.com/v4/games'
    //     const fetchData = async() => {
    //         const response = await fetch(SearchEndPoint, {
    //             method: 'POST',
    //             mode: 'no-cors',
    //             headers:{
    //                 "Access-Control-Allow-Origin": '*',
    //                 "Access-Control-Allow-Methods": '*',
    //                 "client_id" : "KEYHERE",
    //                 "authorization" : 'Bearer KEYHERE',
    //                 'Content-type': 'application/json',
    //             }
    //         })
    //         console.log("I am here:  " + response)
    //         const resData = await response.json()
    //         setData(resData)
    //     }
    //     fetchData()
    // }, [])
    
    console.log(data)

    return(
        <div>

        </div>
    )
}