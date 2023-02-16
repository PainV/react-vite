import { useState, useEffect } from 'react'
import './App.css'
import SimpleImage from './atoms/SimpleImage'
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
    return <SimpleImage imageUrl={urlPicture} className='card-picture'/>
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
