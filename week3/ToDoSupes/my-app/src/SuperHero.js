import React from "react"

function Super (props) {

    const uponClick = () => {
        alert(props.catchPhrase) }

    return (
        <div onClick = {uponClick}>
            <p className="name" >{props.name}</p>
            <img src = {props.imageName}/>
           
        </div>
    )
}

export default Super 