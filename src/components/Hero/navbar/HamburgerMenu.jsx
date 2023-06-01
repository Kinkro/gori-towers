import { StyledHamburgerMenu } from "./Navbar.styled"

const HamburgerMenu = ({navLinks, showmenu}) => {
    return (
        <>
            
            <StyledHamburgerMenu showmenu={showmenu}>
            <h2>Pages</h2>
                {navLinks}</StyledHamburgerMenu>
        </>
    )
}

    

export default HamburgerMenu