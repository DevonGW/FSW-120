import React from "react"

function coloredbox(props) {
    return(
        <div style={{backgroundColor: props.backColor}}>
            <h3 style={{textAlign: "center", paddingTop: "10px"}}>Title: {props.title}</h3>
            <h4 style={{textAlign: "center"}}>Subtitle: {props.subtitle}</h4>
            <p style={{
                        textAlign: "justify", 
                        marginLeft: "10px", 
                        marginRight: "10px",
                        paddingBottom: "10px"}}>Information: {props.info}</p>
        </div>
        
    )
}

export default coloredbox
