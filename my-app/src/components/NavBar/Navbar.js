import { Nav, NavMenu, NavLink, Bars } from "./NavbarElements";

export default function Navbar() {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/">Meadow</NavLink>
          <NavLink className="navlink" to="/signup">
            Sign Up or Login
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
