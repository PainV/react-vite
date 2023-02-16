import React from 'react'

type Props = {
    text: string
    className: string
}

const SimpleText = ({text, className}: Props) => {

    return (
        <div className={className}>
            {text}
        </div>
    )
}

export default SimpleText