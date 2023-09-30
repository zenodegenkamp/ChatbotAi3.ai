import React from 'react'
import Feature from '../components/Feature'

const featuresData = [
    {
      title: 'Enhanced Efficiency',
      text: 'Our AI-powered chatbot streamlines customer interactions, resolving queries quickly and reducing the load on your support team.',
    },
    {
      title: '24/7 Availability',
      text: 'Say goodbye to limited support hours. Our chatbot is available round the clock, ensuring customers receive assistance whenever they need it.',
    },
    {
      title: 'Consistency',
      text: 'Your customers will receive consistent and accurate responses every time, eliminating the variability that can occur with human agents.',
    },
    {
      title: 'Data-Driven Insights',
      text: 'Our chatbot gathers valuable insights from customer interactions, helping you identify trends and areas for improvement in your products and services.',
    },
  ]

export default function Advantages(){


    return (
        <div className="advantages section__padding" id="advantages">
            <div className="advantages__hero">
                <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="advantages__listOfAdvantages">
                {featuresData.map((item, index) => (
                    <Feature name="advantages__listOfAdvantages__advantage" title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}