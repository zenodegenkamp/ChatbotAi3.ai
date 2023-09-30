import React from 'react'
import gpt3logo from '../assets/GPT-3.svg'

export default function Footer(){


    return (
        <div className='footer section__padding'>
            <div className='footer__heading'>
                <h1 className='gradient__text'>Step into the future and upgrade your customer service</h1>
            </div>

            <div className='footer__button'>
                <p>Request Early Acces</p>
            </div>

            <div className='footer__links'>
                <div className='footer__links__logo'>
                    <h1 className='logo'>ChatBotSolutions</h1>
                    <p>Zeno Degenkamp</p>
                    <p>Example website</p>
                </div>

                <div className='footer__links__column'>
                    <h4>Links</h4>
                    <p>Home</p>
                    <p>How does it work?</p>
                    <p>Advantages</p>
                    <p>About us</p>
                </div>

                <div className='footer__links__column'>
                    <h4>Company</h4>
                    <p>Terms & conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>

                <div className='footer__links__column'>
                    <h4>Get in touch</h4>
                    <p>EXAMPLE ADRESS 5100AD</p>
                    <p>06-1234567</p>
                    <p>zeno@info.com</p>
                </div>


            </div>

            <div className='footer__copyright'>
                <p>Zeno Degenkamp 2023. All rights reserved</p>

            </div>
        </div>
    )
}