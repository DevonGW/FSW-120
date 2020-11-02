import React from 'react'

const Square = props => (
    <div className="grid">
        <div style = {{backgroundColor: props.color[0]}}className="box1">one</div>
        <div style = {{backgroundColor: props.color[1]}} className="box2">three</div>
        <div style = {{backgroundColor: props.color[2]}}className="box3">two</div>
        <div style = {{backgroundColor: props.color[3]}}className="box4">four</div>
    </div>
)

export default Square