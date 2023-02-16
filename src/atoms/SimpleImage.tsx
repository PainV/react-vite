import React from 'react'

type Props = {
    imageUrl: string
    className: string
}

const SimpleImage = ({ imageUrl, className }: Props) => {
    const pictureClassName = `${className}-content`
    return (
        <div className={className}>
            <img src={imageUrl} className={pictureClassName}/>
        </div>
    )
}

export default SimpleImage