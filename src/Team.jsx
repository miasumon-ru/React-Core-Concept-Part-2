import { useState } from "react"

export default function Team () {

    function handleAdd() {

        const newTeam = team + 1;
        setTeam(newTeam)


    }
    function handleRemove() {

        const newTeam = team - 1;
       
        if(newTeam >=0 ){
            setTeam(newTeam)
        }else{
            return
        }


    }

    // state

    const [team, setTeam] = useState(11)

    const teamStyle = {
        border: "2px solid green",
        margin: '15px',
        padding: '20px',
        borderRadius: '20px'
    }
    return(
        <div style={teamStyle}>
            <h3>Team:{team} </h3>

            <button style={{margin:'40px', backgroundColor:'gray', color:'white'}}  onClick={handleAdd}>Add</button>

            <button style={{backgroundColor:'gray', color:'white'}}  onClick={handleRemove}>Remove</button>
        </div>
    )
}