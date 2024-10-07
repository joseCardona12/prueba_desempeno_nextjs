"use client";
import styled from "styled-components";
const FooterStyled = styled.footer
`
display:flex;
justify-content:center;

`;
export default function Footer():React.ReactElement{
    return(
        <FooterStyled>
            <p>© 2022 Store @joseCardona. All rights reserved.</p>
        </FooterStyled>
    )
}