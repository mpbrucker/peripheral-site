import * as React from 'react'
import { Link } from 'gatsby';
import "./components.css"


const PageHeader = () => {
    return (
        <div className = "page-header">
            <div className = "header-nav-links">
                <Link to="/">About</Link>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default PageHeader;