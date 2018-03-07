import React from 'react'
import { NavLink } from 'react-router-dom'

const Aboutme = _ => (
    <div className="container-dois">
        <div className="aboutme"><h1>ABOUT ME</h1></div>
        <div className="aboutme-text">
            <p>
                My name is Mateus Guedes da Conceição. I’m a self-taught web developer. I build beautiful, 
                usable web Applications using best practices and the latest W3C web standards. 
                I specialize in front-end development, user experience using modern tools in the build process. 
                I tasked myself to find a passion and that is how i got into Web Development. 
                My goal is to work fully as a web developer in a team of amazing people who share the same passion, 
                and work daily to fulfil it . I am ready to start working with you. <NavLink to='mailto:teugeudes@outlook.com'>Say Hello <i style={{marginRight: '5px'}} className="fa fa-envelope-o" /></NavLink> 
            </p>
        </div>
    </div>
)

export default Aboutme