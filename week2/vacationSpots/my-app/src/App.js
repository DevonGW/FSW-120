import React from 'react'

import Key from "./Key"
import Places from "./Places"

function App() {
  const vacationComp = Places.map(spot => <Key Key={Key.id} place={Key.place} price={Key.price} time={Key.time} />)
  
  return (
      <div>
          {vacationComp}            
      </div>
  )
}

export default App
