import React, { Component } from 'react'

class Buttons extends Component {
  operatorOnly = val => {
    
    console.log(val)
    return !isNaN(val) || val === "/" || val === "*" || val === "." || val === "=" || val === "+" || val === "-"
  }
    render() {
        return (
          <button className={`button ${this.operatorOnly(this.props.children) ? "" : "operator"}`}
          onClick={() => this.props.handleClick(this.props.children)}
          >
            {this.props.children}
          </button>
        )
    }
}

export default Buttons