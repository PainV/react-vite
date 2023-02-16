import React from 'react'

type Props = {
    imageUrl: string
    className: string
}

const SimpleImage = ({ imageUrl, className }: Props) => {

    return (
        <div className='card-picture'>
            <img src={imageUrl} className={className}/>
        </div>
    )
}

export default SimpleImage