import * as React from 'react'
import { Link } from 'gatsby';
import "./components.css"
import logo from "../images/peripheral-study.svg";
import headerImg from "../images/header-image.svg"



const PageHeader = () => {
    return (
        <div className = "page-header">

            <div className = "header-nav-links">
                <Link to="/">Back</Link>
            </div>
            <img className = "header-image" src = {logo} alt="SVG text reading Notes on Peripheral Study."/>
            <img className = "header-image" src = {headerImg} />
        </div>
    )
}

export default PageHeader;