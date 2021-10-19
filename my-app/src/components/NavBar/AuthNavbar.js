import {
  Nav,
  NavMenu,
  NavLink,
  Bars,
  LogoutButton,
  Div,
} from "./NavbarElements";

export default function AuthNavbar({ logOut }) {
  return (
    <>
      <Nav>
        <Bars />
        <NavLink to="/">
          <strong>Meadow 🏠</strong>
        </NavLink>
        <NavMenu>
          <NavLink className="navlink" to="/profile">
            Profile
          </NavLink>
          <NavLink to="/add-listing">
            Add Listing
          </NavLink>
          <Div>
            <LogoutButton onClick={logOut}>Log Out</LogoutButton>
          </Div>
        </NavMenu>
      </Nav>
    </>
  );
}
