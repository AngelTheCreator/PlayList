import TemporaryProfileImg2 from "../../assets/WarDuck.jpg"
import { games } from "../../seederdata/data"


import PlayListHolder from "./playListHolder"

export default function ProfilePage(){
    return(
        <div style={{display: 'flex'}}>
            <div style={{minHeight: "100vh", width: "30.5vw", flexDirection: "column", alignItems: "center", display: 'flex', borderRight: "3px solid black"}}>
              <div style={{ marginTop: "5rem"}}>
                <img src={TemporaryProfileImg2} alt={"Profile Style"} style={{margin: "0px 9px", height: "150px", width:"150px", borderRadius: "300px"}}/>
                <h3>Account Name here</h3>
              </div>
            </div>
            <div style={{minHeight: "100vh", width: "69vw", flexDirection: "column", alignItems: "center", justifyContent: "center", display: 'table'}}>
                <h1>PlayList Here</h1>
                <PlayListHolder item={games}/>
                <PlayListHolder item={games}/>
            </div>
        </div>
    )
}