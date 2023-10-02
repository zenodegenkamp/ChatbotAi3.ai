import React from 'react'
import {Navigate, Link} from "react-router-dom"
import FetchChatBot from '../apiFile'
import send from '../assets/send.png'
import userIcon from '../assets/user-icon.png'
import botIcon from '../assets/logo.png'
import { RiArrowLeftLine } from 'react-icons/ri';



export default function Demo(){

    const [conversationStr, setConversationStr] = React.useState("")
    const [messages, setMessages] = React.useState([
        {
            text: "Hello! Welcome to our customer service. How may I assist you today?",
            isBot: true
        }
    ])

    const handleChange = (event) => {
        setConversationStr(`${event.target.value} ->`);
    };


    async function handleSubmit(event) {
        event.preventDefault();

        const response = await FetchChatBot(conversationStr)
       
    
        setMessages(
            [...messages, 
            {text: document.getElementById('form-input').value,
            isBot: false}, 
            {text: response.reply, isBot: true}
        ])

        setConversationStr(oldStr => oldStr + `${response.reply} \n`)
        document.getElementById('form-input').value = ""
    }


    return (
        
        <div className='demo'>

            <div className='demo__sidebar'>
                <div className='demo__sidebar__exit'>

                <Link to="/"><RiArrowLeftLine className='arrow' />Go back</Link>
                </div>

            </div>

            <div className='demo__chats'>
            
                {messages.map((message, i ) => 
                    <div key={i} className={message.isBot ? "demo__chats_chat bot" : "demo__chats_chat" }>
                    <img src={message.isBot ? botIcon : userIcon} />
                    <p>{message.text}</p>
                </div>

                )}
            </div>
            <div className='demo__footer'>
                <form onSubmit={handleSubmit}>
                    <input
                        id="form-input"
                        className='form-input'
                        type="text"
                        name="question"
                        placeholder="Your Question"
                        onChange={handleChange}
                        required
                    />
                    <div className='form-button-container'>
                        <button className='form-button' type="submit"><img src={send} alt="send icon"/></button>
                    </div>
                </form>
                
            </div>
            <p className='form__smalltext'>This chatbot is simply a demo and does not function as our real products</p>

        </div>
        
    )
}

