import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getShipsDetailed } from './services/graphql';
import Ships from './App'

type Ships = {
    name: string
    type: string
    image: string
    id: string
}

const ShipDetails = () => {
    const [ships, setShips] = useState<Ships[]>([])
    const { id } = useParams();

    useEffect(() => {
        getShipsDetailed().then(setShips)
      })

    function getShipById() : Ships {
        let shipSelected = {} as Ships
        ships.forEach(ship => {
            if (ship?.id === id) {
                shipSelected = ship
                return
            }
        });
        return shipSelected
    }

    const shipSelected = getShipById()
    console.log(shipSelected)
    return (
        <div>
            {shipSelected.name}
        </div>
    )
}

export default ShipDetails