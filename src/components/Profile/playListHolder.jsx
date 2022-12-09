import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"

export default function PlayListHolder(items){
    const [data, setGameData] = useState([])

    useEffect(() => {
        setGameData(items.item)
    }, [])

    console.log(data)

    const PlayListData = data.map((item, index) =>{
        return(
            <div key={index}>
                <Card style={{ width: '10rem', height: "15rem", margin: "10px", backgroundColor: "black"}}>
                    <Card.Img src={item.img} style={{height: "10rem"}} />
                    <Card.Body>
                        <Card.Title style={{color: "white"}}>{item.title}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        )
    })


    return(
        <div style={{ border: "2px solid #FB1514", borderRadius: "75px 20px", backgroundColor: "rgb(35, 35, 35)", margin: "1rem 20px"}}>
            <p style={{marginBottom: "7px"}}>Games</p>
            <div style={{display: "flex", flexWrap: 'wrap', borderTop: "2px dotted grey"}}>
                {PlayListData}
            </div>
        </div>
    )
}