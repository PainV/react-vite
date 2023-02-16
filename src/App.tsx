import { useState, useEffect } from 'react'
import './App.css'
import SimpleImage from './atoms/SimpleImage'
import SimpleText from './atoms/SimpleText'
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
    return <SimpleText text={cardTitle} className='card-header-title'/>
  }

  const renderSubtitle = (cardSubtitle: string) => {
    return <SimpleText text={cardSubtitle} className='card-header-subtitle'/>
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
