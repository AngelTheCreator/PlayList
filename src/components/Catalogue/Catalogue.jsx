import { useEffect, useState } from "react";
import { games } from '../../seederdata/data'

export default function Catalogue(){
    const[data, setData] = useState([])


    // useEffect(() => {
    //     const SearchEndPoint = '	https://nspohjcj10.execute-api.us-west-2.amazonaws.com/test'
    //     const fetchData = async() => {
    //         const response = await fetch(SearchEndPoint, {
    //             method: 'POST',
    //             mode: 'no-cors',
    //             headers:{
    //                 "Access-Control-Allow-Origin": '*',
    //                 "Access-Control-Allow-Methods": '*',
    //                 "client_id" : "KEY_HERE",
    //                 "authorization" : 'Bearer KEY_HERE',
    //                 'Content-type': 'application/json',
    //             }
    //         })
    //         console.log("I am here:  " + response)
    //         const resData = await response.json()
    //         setData(resData)
    //     }
    //     fetchData()
    // }, [])
    
    // console.log(data)

    const gameData = games.map((item, index) =>{
        return(
            <div style={{borderRadius:'20px', border: '2px solid black', margin: '10px 50px', background: '#363537'}} key={index}>
                <h2>{item.title}</h2>
                <p>Game ID: {item.id}</p>
                <img style={{maxHeight: '600px' ,minHeight:'600px', width: '650px', borderRadius: '10px', maxWidth: '100%', height: 'auto',}} src={item.img} alt=""/>
                <p>{item.desc}</p>
            </div>
        )
    })

    return(
        <div>
            {gameData}
        </div>
    )
}