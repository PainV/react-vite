import { useState, useEffect } from 'react'
import './App.css'
import SimpleImage from './atoms/SimpleImage'
import { IMAGE } from './constants'
import CardHeader from './molecules/CardHeader'
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

  const renderHeader = (title: string, subtitle: string) => {
    return <CardHeader title={title} subtitle={subtitle} className='card-header' />
  }

  const renderPicture = (cardPicture: string) => {
    const urlPicture = cardPicture ? cardPicture : IMAGE.FALLBACK_SHIP
    return <SimpleImage imageUrl={urlPicture} className='card-picture'/>
  }

  return (
    <div className="App">
      {ships.map((ship) => (
        <div className="ship" key={ship.id}>
          {renderHeader(ship.name, ship.type)}
          {renderPicture(ship.image)}
        </div>
      ))}
    </div>
  )
}

export default App
