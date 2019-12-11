import React from 'react'
import styled from 'styled-components'
const moment = require ('moment')


const Copyright = styled.div`
    color: white;
    font-size: 13px;
`;

const Link = styled.a`
    color: white;
    font-size: 13px;
`;
const Footer = () => {
    return(
        <nav className="navbar fixed-bottom navbar-dark bg-dark">
            <Copyright>
                Copyright {moment().format('YYYY')}  creado por <Link target="_blank" href='https://github.com/PichuPerez'>gabyperez.dev</Link>
            </Copyright>
        </nav>
    )

}

export default Footer
