import { Nav, NavMenu, NavLink, Bars } from "./NavbarElements";

export default function Navbar() {
  return (
    <>
      <Nav>
        <Bars />
        <NavLink to="/meadow-app-js">
          <strong>Meadow 🏠</strong>
        </NavLink>
        <NavMenu>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">SignUp</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}
