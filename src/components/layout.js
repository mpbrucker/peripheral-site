import * as React from 'react'

import "./style.css"


const Layout = ({ pageTitle, children }) => {
  return (
    <div className="global-wrapper">
      <main>
        <div className="content-wrapper">
            <div className="content">
                {children}
            </div>
        </div>
      </main>
    </div>
  )
}

export default Layout;
