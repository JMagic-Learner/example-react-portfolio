import React from 'react'
import { Link } from 'react-router-dom'

class Main extends React.Component {
render() {
return(<div className = "main">
<div className = "container-fluid">
    <div className = "row">
        <div className = "entry-banner text-center">
            <h1 id = "hello">Hello, I am</h1>
            <h1 id = "name">XXXX</h1>
            <h1 id = "person-description">UI Developer. UX Desinger. Problem Solver.</h1>
        </div>
    </div>

    <div className = "row text-center" id="main-button-container">
        <div className = "banner-buttons">
            <div className = "col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5">
                <Link className = "btn btn-default btn-border" to= "#about">Info</Link>
            </div>

            <div className = "col-sm-1 col-md-1">
                <Link className = "btn btn-default btn-border" to= "#projects">Portfolio</Link>
            </div>
        </div>
    </div>
</div>
</div>)

}}

export default Main