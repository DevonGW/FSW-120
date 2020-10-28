import React from "react"
import "./App.css"
import DiceBox from "./DiceBox"

class App extends React.Component {

  constructor(){
      super()
      this.state = {
          num1: 0,
          num2: 0,
          num3: 0,
          num4: 0,
          num5: 0
      }
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    
            this.setState(prevState => {return {num1: Math.floor(Math.random() * 6) + 1 }})
            this.setState(prevState => {return {num2: Math.floor(Math.random() * 6) + 1 }})
            this.setState(prevState => {return {num3: Math.floor(Math.random() * 6) + 1 }})
            this.setState(prevState => {return {num4: Math.floor(Math.random() * 6) + 1 }})
            this.setState(prevState => {return {num5: Math.floor(Math.random() * 6) + 1 }})
            
            
        

  }
    


  render() {
    return (
        <div>
          <div className="convert">
            <DiceBox num1 = {this.state.num1}/>
            <DiceBox num2 = {this.state.num2}/>
            <DiceBox num3 = {this.state.num3}/>
            <DiceBox num4 = {this.state.num4}/> 
            <DiceBox num5 = {this.state.num5}/> 
          </div>
          <div className="button">
            <button className="button1" onClick = {this.handleClick}><strong>Roll Dice</strong></button>
          </div>
         
        </div>
    )       
  }
}

export default App
