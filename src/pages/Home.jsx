import React from 'react'
import { Link } from "react-router-dom";
import Hero from "../components/Hero"
import Header from '../components/Header'
import Brand from '../components/Brand'
import Features from '../components/Features'
import Advantages from '../components/Advantages'
import Aboutus from '../components/Aboutus'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

export default function Home() {


    return (

        <div className='background'>
            <div className='gradient__bg'>
                <Header />
                <Hero />
            </div>

            <Brand />
            <Features />
            <Advantages />
            <Aboutus />
            <CallToAction />
            <Footer />

        </div>

    )

}

