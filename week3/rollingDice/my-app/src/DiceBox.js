import React from "react"

function DiceBox(props) {
    return(
        <div className="box" >
            <p >{props.num1}</p>
            <p >{props.num2}</p>
            <p >{props.num3}</p>
            <p >{props.num4}</p>
            <p >{props.num5}</p>            
        </div>
    )
}

export default DiceBox
