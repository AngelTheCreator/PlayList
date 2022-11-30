import TemporaryProfileImg2 from "../../assets/WarDuck.jpg"


export default function ProfilePage(){
    return(
        <div style={{display: 'flex'}}>
            <div style={{minHeight: "100vh", width: "30.5vw", flexDirection: "column", alignItems: "center", justifyContent: "center", display: 'flex', borderRight: "3px solid black"}}>
              <img src={TemporaryProfileImg2} alt={"Profile Style"} style={{margin: "0px 9px", height: "150px", width:"150px", borderRadius: "300px"}}/>
              <h3>Account Name here</h3>
            </div>
            <div style={{minHeight: "100vh", width: "69vw", flexDirection: "column", alignItems: "center", justifyContent: "center", display: 'flex'}}>
                <h1>PlayList Here</h1>
            </div>
        </div>
    )
}