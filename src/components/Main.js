import React from 'react';
import styled from 'styled-components';

function Main() {
    return (
        <Container>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordon Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </Container>
    )
}

const Container = styled.div`
    color: #2B283A;
    padding: 57px 27px;
    
    h1{
        font-size: 39px;
        letter-spacing: -0.05em;
    }
    ul > li{
        line-height: 19px;
        padding: 10px;
    }
    ul > li::marker{
        color: #61dafb;
        font-size: 1.4rem;
    }
    ul{
        margin-top: 46px;    
        max-width: 400px;
        padding-left: 30px;
    }
`;

export default Main;