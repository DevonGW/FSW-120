import React, { Component } from 'react';
import './App.css'
import Buttons from './Buttons';
import Input from './Input'


class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      result: "",
      prevNum: "",
      input: "",
      operator: ""
    }
  }

  addToInput = val => {
    this.setState({ result: "", input: this.state.input + val})
  }

  clearInput = () => {
    this.setState({ 
      result: "",
      prevNum: "",
      input: "",
      operator: ""
    })
  }

  add = () => {
    this.setState(prevState => ({
      operator: "+",
      prevNum: prevState.input,
      input: ""
    }))
  }

  subtract = () => {
    this.setState(prevState => ({
      operator: "-",
      prevNum: prevState.input,
      input: ""
    }))
  }

  multiply = () => {
    this.setState(prevState => ({
      operator: "*",
      prevNum: prevState.input,
      input: ""
    }))
  }

  divide = () => {
    this.setState(prevState => ({
      operator: "/",
      prevNum: prevState.input,
      input: ""
    }))
  }

  evaluate = () => {
    this.state.input === this.state.input

    if(this.state.operator === "+") {
      this.setState(prevState =>({
        result:
          parseInt(prevState.prevNum) 
            + 
          parseInt(prevState.input),
          input: "",
          prevNum: "",
          operator: ""
      }))
    } else if(this.state.operator === "-") {
      this.setState(prevState =>({
        result:
          parseInt(prevState.prevNum)
            -
          parseInt(prevState.input),
          input: "",
          prevNum: "",
          operator: ""
      }))
    } else if(this.state.operator === "*") {
      this.setState(prevState =>({
        result:
          parseInt(prevState.prevNum)
            *
          parseInt(prevState.input),
          input: "",
          prevNum: "",
          operator: ""
      }))
    } else if(this.state.operator === "/") {
      this.setState(prevState =>({
        result:
          parseInt(prevState.prevNum)
            /
          parseInt(prevState.input),
          input: "",
          prevNum: "",
          operator: ""
      }))
    }
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>
              {this.state.prevNum || ""}
              {this.state.operator || ""}
              {this.state.result || this.state.input}
            </Input>
          </div>
          <div className="row">
            <Buttons handleClick={this.addToInput}>7</Buttons>
            <Buttons handleClick={this.addToInput}>8</Buttons>
            <Buttons handleClick={this.addToInput}>9</Buttons>
            <Buttons handleClick={this.divide}>/</Buttons>
          </div>
          <div className="row">
            <Buttons handleClick={this.addToInput}>4</Buttons>
            <Buttons handleClick={this.addToInput}>5</Buttons>
            <Buttons handleClick={this.addToInput}>6</Buttons>
            <Buttons handleClick={this.multiply}>*</Buttons>
          </div>
          <div className="row">
            <Buttons handleClick={this.addToInput}>1</Buttons>
            <Buttons handleClick={this.addToInput}>2</Buttons>
            <Buttons handleClick={this.addToInput}>3</Buttons>
            <Buttons handleClick={this.add}>+</Buttons>
          </div>
          <div className="row">
            <Buttons handleClick={this.clearInput}>A/C</Buttons>
            <Buttons handleClick={this.addToInput}>0</Buttons>
            <Buttons handleClick={this.evaluate}>=</Buttons>
            <Buttons handleClick={this.subtract}>-</Buttons>
          </div>
        </div>
      </div>
    );
  }
}

export default App;