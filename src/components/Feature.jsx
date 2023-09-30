import React from 'react'


export default function Feature({ title, text, name }) {

    console.log(name)

    return (
        <div className={name}>
            <div className="features__container__feature__title">
                <div />
                <h1>{title}</h1>
            </div>
            <div className="features__container__feature__text">
                <p>{text}</p>
            </div>
        </div>

    )
}

// features__container__feature 