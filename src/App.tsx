import { useState, useEffect } from 'react'
import './App.css'
import { IMAGE } from './constants'
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
      <div className='card-header-title'>
        {cardTitle}
      </div>
    )
  }

  const renderSubtitle = (cardSubtitle: string) => {
    return (
      <div className='card-header-subtitle'>
        {cardSubtitle}
      </div>
    )
  }

  const renderPicture = (cardPicture: string) => {
    const urlPicture = cardPicture ? cardPicture : IMAGE.FALLBACK_SHIP
    return (
      <div className='card-picture'>
        <img src={urlPicture} className='card-picture'/>
      </div>
    )
  }

  return (
    <div className="App">
      {ships.map((ship) => (
        <div className="ship" key={ship.id}>
          <div className='card-header'>
            {renderTitle(ship.name)}
            {renderSubtitle(ship.type)}
          </div>
          {renderPicture(ship.image)}
        </div>
      ))}
    </div>
  )
}

export default App
