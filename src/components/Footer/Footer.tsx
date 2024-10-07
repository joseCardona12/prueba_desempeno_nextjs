"use client";
import styled from "styled-components";
const FooterStyled = styled.footer
`
height: 50px;
position: absolute;
right: 5%;
bottom: 0;
height: 10%;
`;
export default function Footer():React.ReactElement{
    return(
        <FooterStyled>
            <p>© 2022 Store @joseCardona. All rights reserved.</p>
        </FooterStyled>
    )
}