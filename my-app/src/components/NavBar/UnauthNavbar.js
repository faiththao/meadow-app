import { Nav, NavMenu, NavLink, Bars } from './NavbarElements'

export default function UnauthNavbar() {
    return(
        <>
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Meadow
                </NavLink>
                <NavLink className='navlink' to="/signup" activeStyle>
                    Sign Up or Login
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    )
}