import React from "react"
import people from "../assets/people.png"
import ai from "../assets/ai.png"
import Spline from '@splinetool/react-spline';



export default function Hero() {

    return (
        <div className="hero section__padding" id="home">
            <div className="hero__content">
                <h1 className="gradient__text">Your automatic customer service AI employee</h1>
                <p> Our company specializes in harnessing the power of your existing customer service data to create AI solutions that are perfectly tailored to your organization and its unique customer base</p>

                <div className="hero__content__input">
                    <input type="email" placeholder="Your Email adress" />
                    <button type="button">Get Started</button>
                </div>

                <div className="hero__content__people">
                    <img src={people} />
                    <p>1.6000 people requested acces to our powerfull technology</p>
                </div>
            </div>
            <div className="hero__image">
            <Spline scene="https://prod.spline.design/tVCE0EVQn9JjlFlH/scene.splinecode" />
                {/* <img src={ai} alt="ai" /> */}
            </div>
        </div>
    )
} 

<div className="hero section__padding" id="home">
<div className="hero__content">
    <h1 className="gradient__text">Your automatic customer service AI employee</h1>
    <p> Our company specializes in harnessing the power of your existing customer service data to create AI solutions that are perfectly tailored to your organization and its unique customer base</p>

    <div className="hero__content__input">
        <input type="email" placeholder="Your Email adress" />
        <button type="button">Get Started</button>
    </div>

    <div className="hero__content__people">
        <img src={people} />
        <p>1.6000 people requested acces to our powerfull technology</p>
    </div>
</div>
<div className="hero__image">
<Spline scene="https://prod.spline.design/tVCE0EVQn9JjlFlH/scene.splinecode" />
    {/* <img src={ai} alt="ai" /> */}
</div>
</div>