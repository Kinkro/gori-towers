import { styled } from "styled-components";
// import PropTypes from 'prop-types'


export const StyledNavbar = styled.nav`
    width:100%;
    height:70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: 	#503D3F;
    img{
        margin-left: 50px;
    }

`;

export const StyledIconContainer = styled.div`
    display: flex;
    gap:1rem;
    margin-right: 50px;
    svg{
        scale: 1.5;
        cursor: pointer;
        color: #f0f0f0;
    }
    svg:hover{
        color: #615756;
    }
    a{
        text-decoration: none;
    }

`

export const StyledNavLink = styled.div`
a{

    font-size: 16px;
    font-weight: 400;
    color: #539987;
    text-decoration: none;
    padding: 8px 16px;
    white-space: nowrap;
}
    a.active {
        color: 	#f0f0f0;
        border: 2px solid #539987;
    }
    a:hover{
        color: #f0f0f0;
    }

    @media (max-width: 605px){
        display: none;
    }
`

export const StyledHambMenu = styled.div`
    display:none;
    svg{
        margin-left: 1rem;
        color: #f0f0f0;
        scale: 2.5;
    }

    @media (max-width: 605px){
        display: block;
    }
`;



export const StyledHamburgerMenu = styled.div`
    display: ${({showmenu})=> showmenu};
    position: fixed;
    right:0;
    top:0;
    width:70%;
    height:100vh;
    background-color: gray;
    flex-flow: column nowrap;
    margin-top: 70px;
    h2{
        margin: 1.5rem auto 1rem;
    }
    a{
        font-size: 16px;
        font-weight: 400;
        color: #333;
        text-decoration: none;
        padding: 8px 8px;
        white-space: nowrap;
    }

    @media (min-width: 605px){
        display: none;
    }
`;
