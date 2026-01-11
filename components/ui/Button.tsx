

import React from 'react'

interface ButtonProps {
    text: string | React.ReactElement
    className: string
}


export default function Button({ text, className }: ButtonProps) {
    return (
        <button className={`${className} cursor-pointer h-9 rounded-md font-semibold`}>
            {text}
        </button>
    )
}
