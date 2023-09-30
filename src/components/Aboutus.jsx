import React from "react"
import aboutUsImage from "../assets/aboutUsImage.png"

export default function Aboutus() {



    return (
        <div className="aboutUs section__padding" id="aboutUs">
            <div className="aboutUs__image">

                <img src={aboutUsImage}></img>
            </div>
            <div className="aboutUs__content">
                <h4>The future for chatbots</h4>
                <h1 className="gradient__text">Let's Transform Together</h1>
                <p>At ChatBotSolutions, we are pioneers in the application of AI technology to customer service. Our team consists of experts who are passionate about leveraging AI to its fullest potential. With a deep understanding of machine learning and natural language processing, we've developed a unique approach that empowers us to create AI-driven chatbots that truly understand and engage with your customers.

                    Our success stems from a dedication to innovation, a commitment to understanding your business, and a relentless pursuit of excellence in AI technology. We are excited to partner with you in transforming your customer service landscape and delivering unparalleled experiences to your clients.

                    Join us on this journey towards a new era of customer engagement, where AI isn't just a buzzword – it's the driving force behind smarter, more meaningful interactions.</p>

                <h4>Elevate Experiences, Drive Growth: Connect with Us</h4>

            </div>

        </div>
    )
}