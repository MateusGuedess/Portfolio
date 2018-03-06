import React from 'react'
import {NavLink, Route }  from 'react-router-dom'


const Header = _ => (
    <Route>
        <div className='container-top'>
            <ul className='menu-top'>
                <li><NavLink activeClassName="selected"  to='/home'>HOME</NavLink ></li>
                <li><NavLink activeClassName="selected" to='/aboutme'>ABOUT ME</NavLink ></li>
                <li><NavLink activeClassName="selected" to='/skills'>SKILLS</NavLink ></li>
                <li><NavLink activeClassName="selected" to='/portfolio'>PORTFOLIO</NavLink ></li>
                <li><NavLink id='download-cv' activeClassName="selected" 
                    style={{
                        border: 'solid 3px',
                        borderRadius: '10px',
                        padding:'10px 50px 10px 45px',
                        transition: 'background 2s'
                    }} to='/cv'><i style={{marginRight: '5px'}} className="fa fa-download fa-spin" /> CV</NavLink ></li>
            </ul>
        </div>
    </Route>
)

export default Header