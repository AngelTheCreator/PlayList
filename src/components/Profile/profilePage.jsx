import TemporaryProfileImg2 from "../../assets/WarDuck.jpg"
import TemporaryProfileImg1 from "../../assets/LickyShplit.gif"
import { games } from "../../seederdata/data"

import PlayListHolder from "./playListHolder"

export default function ProfilePage(){
    return(
        <div style={{display: 'flex'}}>
            <div style={{minHeight: "100vh", width: "30.5vw", flexDirection: "column", alignItems: "center", display: 'flex', borderRight: "3px solid black"}}>
              <div style={{ marginTop: "5rem"}}>
                <img src={TemporaryProfileImg1} alt={"Profile Style"} style={{margin: "0px 9px", height: "150px", width:"150px", borderRadius: "300px"}}/>
                <h2 style={{margin: "0.8rem"}}>Account Name here</h2>
                <p style={{fontSize: "25px", color: "grey"}}>
                  Account Description / About Me
                </p>
              </div>
              <div>
                <h2 style={{color: "orange"}}>
                  Badges
                </h2>
              </div>
              <div>

              </div>
            </div>
            <div style={{minHeight: "100vh", width: "69vw", flexDirection: "column", alignItems: "center", justifyContent: "center", display: 'table'}}>
                <h1 style={{ margin: "25px 0px 35px 0px"}}>PlayList Here</h1>
                <PlayListHolder item={games}/>
                <PlayListHolder item={games}/>
            </div>
        </div>
    )
}