import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Demo from "./pages/Demo.jsx"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"


function App(){

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Demo" element={<Demo />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
)}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />,
)
