import React from "react"
import './App.css'
import Box from './Box'
import Header from './header'

 class App extends React.Component {
   constructor() {
     super()
     this.state = {colors: ["Red", "Orange", "White", "blue"]}
   }
  render() {
  return (
    <div className="App">
        <Header />
        <Box color={this.state.colors}/>
        <div className="buttoncontainer">
          <button className="button1" onClick={() => {this.setState(prevState => {
            let newColors = []
           for(let i = 0; i < prevState.colors.length; i++) {
              let color = prevState.colors[i]
              if(prevState.colors[0] !== "white" ) {
                newColors = ["white", "white", "white", "white"]
              } else if (prevState.colors[0] === "white" ) {
                newColors = ["black", "black", "black", "black"]
              }
            } 
            console.log(newColors)
            return({
              colors: newColors
          })})}}>Small time DJ: one</button>

          <button className="button2" onClick={() => {this.setState(prevState => {
            let newColors = []
            newColors = ["purple", prevState.colors, "purple", prevState.colors]
            return({
              colors: newColors
          })})}}>Party DJ: two</button>

          <button className="button3" onClick={() => {this.setState(prevState => {
            let newColors = []
            newColors = [prevState.colors, "blue", prevState.colors, prevState.colors]
            return({
              colors: newColors
          })})}}>Pro DJ: Three</button>

          <button className="button4" onClick={() => {this.setState(prevState => {
            let newColors = []
            newColors = [prevState.colors, prevState.colors, prevState.colors, "blue"]
            return({
              colors: newColors
          })})}}>Pro DJ: Four</button>
          <button className="button5" onClick={() => {this.setState(prevState => {
            let newColors = []
            newColors = [prevState.colors[0], prevState.colors[2], prevState.colors[3], "red"]
            return({
              colors: newColors
          })})}}>Big Time DJ: Five</button>
          <button className="button6" onClick={() => {this.setState(prevState => {
            let newColors = []
            newColors = ["red", prevState.colors[2], prevState.colors[3], prevState.colors[1]]
            return({
              colors: newColors
          })})}}>Big Time DJ: Six</button>
          <button className="button7" onClick={() => {this.setState(prevState => {
            let newColors = []
            newColors = [prevState.colors[0], "red", prevState.colors[3], prevState.colors[1]]
            return({
              colors: newColors
          })})}}>Big Time DJ: Seven</button>
          <button className="button8" onClick={() => {this.setState(prevState => {
            let newColors = []
            newColors = [prevState.colors[0], prevState.colors[2], "red", prevState.colors[1]]
            return({
              colors: newColors
          })})}}>Big Time DJ: Eight</button>
        </div>
    </div>
  )
  }
}

export default App;