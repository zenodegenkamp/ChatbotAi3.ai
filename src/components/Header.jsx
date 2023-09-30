import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Menu = () => (
  <>
    <p><a href="/">Home</a></p>
    <p><a href="#features">How does it work?</a></p>
    <p><a href="#advantages">Advantages</a></p>
    <p><a href="#aboutUs">About us</a></p>
  </>
)

export default function Header() {

  const [toggleMenu, setToggleMenu] = useState(false)



  return (
    
      <div className="header">

        <div className="navbar__logo">
        <h1 className='logo'>ChatBotSolutions</h1>
        </div>
        <div className="navbar__links">
          <nav className="navbar__links_container">
            
            <Menu />
          </nav>
        </div>

        <div className="navbar__demo_container">
          <Link to="/demo" className="navbar__demo_button">Go to demo</Link>
        </div>

        <div className="navbar__menu">
          {toggleMenu 
          ? (<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>)
            : (<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            )}
          {toggleMenu && (
            <div className="navbar__menu_container scale-up-center">
              <div className="navbar__menu_container_links">
                <Menu />
                <div className="navbar__menu_container_links_demo_btn">
                  <Link to="/demo" className="navbar__demo_button">Go to demo</Link>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
  )
}


