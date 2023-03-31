import {NavContainer,NavLinkContainer,StyledNavLink} from "./navbar.styles.jsx";

import {ReactComponent as HomeLogo} from "../../assets/home.svg";
import {ReactComponent as GraphLogo} from "../../assets/graph.svg";
import {ReactComponent as SavingsLogo} from "../../assets/savings.svg"
import {ReactComponent as ProfileLogo} from "../../assets/account.svg"

const NavBar = () => {
  return (
    <NavContainer>
      <nav>
        <NavLinkContainer>
          <li>
              <StyledNavLink to='/'><HomeLogo className="icon"viewBox="0 0 48 48"/></StyledNavLink>
          </li>
          <li>
              <StyledNavLink className={"nav-link"} to='/graphs'><GraphLogo className="icon" viewBox="0 0 48 48"/></StyledNavLink>
          </li>
          <li>
              <StyledNavLink className={"nav-link"} to='/planner'><SavingsLogo className="icon" viewBox="0 0 48 48"/></StyledNavLink>
          </li>
          <li>
              <StyledNavLink className={"nav-link"} to='/profile'><ProfileLogo className="icon" viewBox="0 0 48 48"/></StyledNavLink>
          </li>
        </NavLinkContainer>
      </nav>
    </NavContainer>
  );
};

export default NavBar;
