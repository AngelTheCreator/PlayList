import { useEffect, useState } from "react";
import { games } from '../../seederdata/data'

import Card from 'react-bootstrap/Card'

export default function Catalogue(){
    const[data, setData] = useState([])



    useEffect(() => {
        const SearchEndPoint = 'https://88ehbcwo8g.execute-api.us-west-2.amazonaws.com/games'
        const fetchData = async() => {
            const response = await fetch(SearchEndPoint, {
                mode: "no-cors",
                headers:{
                    "Access-Control-Allow-Origin": '*',
                    "Access-Control-Allow-Methods": '*',
                    'Content-type': 'application/json',
                }
            })
            console.log("I am here:  " + response)
            const resData = await response.json()
            setData(resData)
        }
        fetchData()
    }, [])
    
    console.log(data[0])

    useEffect(() => {
        setData(games)
    }, [])

    const someData = data.map((item, index) =>{
        return(
            <Card style={{ aspectRatio: '1 / 1.4', width: "15.295vw",margin: '10px 10px', backgroundSize: `100% 100%`, backgroundRepeat: 'no', backgroundImage:`url(${item.img})`, border: "4px solid black", borderRadius: "10px solid black"}} key={index}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text style={{color: 'white'}}>Item ID: {item.id}</Card.Text>
            </Card>
            // <div style={{borderRadius:'20px', border: '2px solid black', margin: '10px 50px', background: '#363537'}} key={index}>
            //     <h2>{item.title}</h2>
            //     <p>Game ID: {item.id}</p>
            //     <img style={{maxHeight: '600px' ,minHeight:'600px', width: '650px', borderRadius: '10px', maxWidth: '100%', height: 'auto',}} src={item.img} alt=""/>
            //     <p>{item.desc}</p>
            // </div>
        )
    })

    return(
        <div style={{justifyContent: "center"}}>
            <a href={'/catalogue/search'}>
                <button>
                        Search Page
                </button>
            </a>
            <div style={{display: "flex", flexWrap: 'wrap'}}>
                {someData}  
            </div>
        </div>
    )
}