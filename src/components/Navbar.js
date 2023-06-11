import React from 'react';
import styled from 'styled-components';

function Navbar() {
    return (
        <Nav>
            <img src="images/logo.svg" alt='logo' />
            <h2>ReactFacts</h2>
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
    }
`;

export default Navbar;