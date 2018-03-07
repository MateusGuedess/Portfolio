import React from 'react'
import { Link } from 'react-router-dom'
const Rodape = _ => (
        <div className="rodape">
            <p>© 2014-2018 Todos os direitos reservados</p>
            <Link to='https://www.facebook.com/mateus.guedes.562'><i class="fa fa-facebook-square" /></Link>
            <Link to='https://www.instagram.com/guedes__mateus/'><i class="fa fa-instagram" /></Link>
            <Link to='https://www.linkedin.com/in/mateusguedess/'><i class="fa fa-linkedin" /></Link>
        </div>
)

export default Rodape