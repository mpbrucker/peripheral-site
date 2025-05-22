import * as React from 'react'
import { Link } from 'gatsby'

import "./style.css"


const Layout = ({ pageTitle, children }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <div><Link to="/about">About</Link></div>
      </header>
      <main>
        <div className="content-wrapper">
            <div className="content">
                <h1>{pageTitle}</h1>
                {children}
            </div>
        </div>
      </main>
    </div>
  )
}

export default Layout
