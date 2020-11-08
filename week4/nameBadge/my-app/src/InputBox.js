import React, {Component} from 'react'


class InputBox extends Component {
    constructor(props) {
      super(props)
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        general: "",
        names: []
      }
      this.handleChange=this.handleChange.bind(this)
    }
  
    handleChange(event) {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
    }
  
    handleClick = (event) => {
      event.preventDefault()
      let badgeObj = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          placeOfBirth: this.state.placeOfBirth,
          phone: this.state.phone,
          favoriteFood: this.state.favoriteFood,
          general: this.state.general
      }
      var counter = false
      for(let i=0; i<Object.values(badgeObj).length; i++) {
          if(Object.values(badgeObj)[i]<3) {
            counter = true 
          }
      }
      if(!counter) {
      this.setState(
        prevState =>  
        ({
          names: [...prevState.names, badgeObj]
        })) 
    } else {
        return alert("Please enter proper values.")
        }
    }
  
    render() {
      return (
        <form  onSubmit={this.handleSubmit}>
        <div className="grid">
          <input 
            type="text" 
            value={this.state.firstName} 
            name="firstName" 
            className="firstName"
            placeholder="First Name" 
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            className="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.email}
            name="email"
            className="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.placeOfBirth}
            name="placeOfBirth"
            className="placeOfBirth"
            placeholder="Place of Birth"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.phone}
            name="phone"
            className="phone"
            placeholder="Phone"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.favoriteFood}
            name="favoriteFood"
            className="favoriteFood"
            placeholder="Favorite Food"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.general}
            name="general"
            className="general"
            placeholder="Tell us about yourself!"
            onChange={this.handleChange}
          />
          <br />
          <br />
        
          <button type="submit" className="btn" onClick={(e) => this.handleClick(e)}>Submit</button>
        </div>
          <h1>{this.state.badgeObj}</h1>
          {this.state.names.map((badge, index) => (
            <div className="badge">
                <div className="title">Badge:</div>
                <div className= "firstNameBadge"> Name: {badge.firstName} {badge.lastName}</div>
                <div className="emailBadge"> Email: {badge.email}</div>
                <div className="placeOfBirthBadge">Place of birth: {badge.placeOfBirth}</div>
                <div className="phoneBadge">Phone: {badge.phone}</div>
                <div className="favoriteFoodBadge">Favorite Food: {badge.favoriteFood}</div>
                <div className="generalBadge">{badge.general}</div>
            </div>))}
            </form>
      )
    }
  }

export default Inputs