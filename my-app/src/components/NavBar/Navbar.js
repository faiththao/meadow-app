import { Nav, NavMenu, NavLink, Bars } from "./NavbarElements";

export default function Navbar() {
  return (
    <>
      <Nav>
        <Bars />
        <NavLink to="/">
          <strong>Meadow</strong>
        </NavLink>
        <NavMenu>
          <NavLink className="navlink" to="/signup">
            Sign Up or Login
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
