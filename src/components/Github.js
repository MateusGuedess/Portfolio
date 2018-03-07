import React from 'react'
import { Link }  from 'react-router-dom'

const Github = _ => (
    <div className='github-container'>
        <div className="github">
            <Link to='http://github.com' >
                <i className="fa fa-github-square fa-10x" />
            </Link>
        </div>
        <div className="github-text">
            <p>"Nunca saberemos o quão forte somos <br/> até que ser forte seja a única escolha."</p>
        </div>
    </div>
)
            

export default Github