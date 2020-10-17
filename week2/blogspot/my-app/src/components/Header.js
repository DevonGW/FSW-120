import React from "react"

import Navbar from "./Navbar"

function Header() {
    return (
        <div style={{
            textAlign: "center",
            backgroundColor: "slategray",
            height: "250px",
            width: "100%",
            color: "white"
            }}>
            <Navbar />
            <h1 style={{margin: "0px", paddingTop: "50px", fontFamily: "sans-serif"}}>Clean Blog</h1>
            <p style={{margin: "0px", fontWeight: "lighter", fontSize: "12px"}}>A Blog Theam by Start Bootstrap</p>

                      
        </div>
    )
}

export default Header