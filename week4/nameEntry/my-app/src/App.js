import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            nameList: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    onclickUpdate = (event) => {
      event.preventDefault()
      this.setState({
        nameList: this.state.nameList.concat(this.state.name),
        name: ""

      })
      

    }
    
  render() {      

    return (
          <div>
            <form  className="box" >
                <input 
                    id="input"
                    type="text" 
                    value={this.state.name} 
                    name="name" 
                    placeholder="Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <h1>{this.state.name}</h1>
                <br />
                <button id="button" onClick={this.onclickUpdate}>Submit</button> 
            </form>

            <ol className="boxList">
              {this.state.nameList.map(name =>
                <li key={name}>{name}</li>
              )}
            </ol>
          </div>
        )
    }
}

export default App