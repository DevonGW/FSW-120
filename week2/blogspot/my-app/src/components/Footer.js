import React from "react"

function Footer() {
    return (
        <div>
            <button style={{backgroundColor: "#3B9C9C", height: "25px", width: "90px", marginLeft: "550px"}}><a style={{color: "white", fontSize: "8px", textDecoration: "none"}} href="#">Older Posts </a></button>
            <hr style={{borderTop: "1px solid lightgray"}}/>
            <p style={{textAlign: "center", fontSize: "10px", marginTop: "60px", marginBottom: "40px", color: "gray"}}>Copyright © Your Website 2020</p>                     
        </div>
    )
}

export default Footer