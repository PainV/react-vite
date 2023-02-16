import { useState, useEffect } from 'react'
import './App.css'
import { getShips } from './services/graphql'

type Ships = {
  name: string
  type: string
  image: string
  id: string
}

const App = () => {
  const [ships, setShips] = useState<Ships[]>([])

  useEffect(() => {
    getShips().then(setShips)
  })

  const renderTitle = (cardTitle: string) => {
    return (
      <div className='card-title'>
        {cardTitle}
      </div>
    )
  }

  const renderSubtitle = (cardSubtitle: string) => {
    return (
      <div className='card-subtitle'>
        {cardSubtitle}
      </div>
    )
  }

  const renderPicture = (cardPicture: string) => {
    return (
      <div className='card-picture'>
        <img src={cardPicture} className='card-picture'/>
      </div>
    )
  }

  return (
    <div className="App">
      {ships.map((ship) => (
        <div className="ship" key={ship.id}>
          {renderTitle(ship.name)}
          {renderSubtitle(ship.type)}
          {renderPicture(ship.image)}
        </div>
      ))}
    </div>
  )
}

export default App
