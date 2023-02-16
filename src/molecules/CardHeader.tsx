import React from 'react'
import SimpleText from '../atoms/SimpleText'

type Props = {
    title: string
    subtitle: string
    className: string
}

const CardHeader = ({title, subtitle, className}: Props) => {
    const titleClassName = `${className}-title`
    const subtitleClassName = `${className}-subtitle`

    return (
        <div className={className}>
            <SimpleText text={title} className={titleClassName} />
            <SimpleText text={subtitle} className={subtitleClassName} />
        </div>
    )
}

export default CardHeader