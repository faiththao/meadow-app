import { Nav, NavMenu, NavLink, Bars } from './NavbarElements'

export default function AuthNavbar() {
    return(
        <>
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Meadow
                </NavLink>
                <NavLink className='navlink' to="/profile" activeStyle >
                    Profile
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    )
}