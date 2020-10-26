import React from 'react';
import SuperHero from "./SuperHero";
import TopHero from "./TopHero.json";


class App extends React.Component {
    constructor () {
        super ()
        this.state = {
            heros: TopHero
        }
    }


render () {
    const heroItems = TopHero.map(item => <SuperHero key={item.id} name={item.name} show={item.show} catchPhrase={item.catchPhrase} imageName={item.imageName} />);

    return (
        <div>
          {heroItems}
        </div>
      )
      } 
}
      
   
export default App

 



