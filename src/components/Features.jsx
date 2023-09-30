import React from 'react'
import Feature from '../components/Feature'

export default function Features() {

    return (

        <div className='features section__margin' id="features">
            <div className='features__feature'>
                <h1>How Does It Work?</h1>
                <p>ChatGPT 3 is the latest advancement in AI language technology. It's a highly advanced chatbot model built upon GPT-3, capable of understanding and generating human-like text responses. Imagine having a conversation with a chatbot that not only comprehends the context of your inquiries but also responds in a natural and contextually relevant manner. ChatGPT 3 is designed to simulate human conversation, making interactions with technology more intuitive and effective.</p>
            </div>

            <div className='features__heading'>
                <h1 className='gradient__text'>The process in three steps</h1>
                <p>Explore the Demo</p>
            </div>

            <div className='features__container'>
                <Feature title="1 Use existing data" text="Your chatbot is able to engage in natural and flowing conversations, providing a seamless experience for your customers. No more robotic responses!"  classname="features__container__feature " />
                <Feature title="2 Create personalized bot " text="With its ability to understand individual customer needs, ChatGPT helps your chatbots provide personalized recommendations and support, enhancing customer satisfaction." classname="features__container__feature"/>
                <Feature title="3 Continuous Learning" text="ChatGPT learns from every interaction, constantly improving its responses and becoming smarter over time. This ensures that your AI chatbot keeps getting better at understanding and addressing customer inquiries." classname="features__container__feature"/>
            </div>
        </div>

    )
}

