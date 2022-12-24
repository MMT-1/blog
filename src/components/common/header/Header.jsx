import React, { useState } from "react"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/culture'>Culture</Link>
              </li>
              <li>
                <Link to='/politics'>Politics</Link>
              </li>
              <li>
                <Link to='/memes'>Memes</Link>
              </li>
              <li>
                <Link to='/sports'>Sports</Link>
              </li>
              <li>
                <Link to='/boxed'>Boxed</Link>
              </li>
              <li>
                <Link to='/reviews'>Reviews</Link>
              </li>
              <li className="search_box">
                <div id="searchUsers" className="instant-search">
                  <div className="instant-search__input-container">
                    <input className="instant-search__input" type="text" spellcheck="false" placeholder="Search Users" />
                    <i className="fa-solid fa-magnifying-glass instant-search__icon"></i>
                  </div>
                </div>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
