import React from 'react';
import styled from 'styled-components';

function Navbar(props) {
    return (
        <Nav className={props.darkMode ? 'dark' : ''}>
        {/* // <Nav className='dark'> */}
            <img src="images/logo.svg" alt='logo' />
            <h2>ReactFacts</h2>
            <div className='toggler'>
                <p className='toggler--light'>Light</p>
                <div className='toggler--slider' onClick={props.toggleDarkMode}>
                    <div className='toggler--slider--circle'></div>
                </div>
                <p className='toggler--dark'>Dark</p>
            </div>
        </Nav>
    )
}

const Nav = styled.nav`
    height: 80px;
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    img{
        height: 100%;
    }
    h2{
        color: #61DAFB;
        margin-right: auto;
    }
`;

export default Navbar;