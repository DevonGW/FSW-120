import React from "react"

function BlogList(props) {
    return (
        <div style={{textAlign: "left", paddingLeft: "300px", paddingRight: "300px", fontFamily: "sans-serif", marginTop: "25px"}}>
            <h3 style={{margin: "0px"}}>{props.title}</h3>
            <p style={{margin: "0px", marginTop: "5px", fontSize: "13px", fontWeight: "lighter"}}>{props.subTitle}</p>
            <p style={{margin: "0px", marginTop: "5px", fontStyle: "italic", fontSize: "10px"}}>Posted by <strong>{props.author}</strong><span> on {props.date}</span></p>       
            <hr style={{marginTop: "25px", borderTop: "1px solid lightgray"}}/>                
        </div>
         
    )
}

export default BlogList