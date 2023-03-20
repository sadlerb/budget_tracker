import { NavLink } from "react-router-dom";

import "./navbar.scss";
import {ReactComponent as HomeLogo} from "../../assets/home.svg";
import {ReactComponent as GraphLogo} from "../../assets/graph.svg";
import {ReactComponent as SavingsLogo} from "../../assets/savings.svg"
import {ReactComponent as ProfileLogo} from "../../assets/account.svg"

const NavBar = () => {
  return (
    <nav>
      <div >
        <li>
            <NavLink className={"nav-link"} to='/'><HomeLogo className="icon"viewBox="0 0 48 48"/></NavLink>
        </li>
        <li>
            <NavLink className={"nav-link"} to='/graphs'><GraphLogo className="icon" viewBox="0 0 48 48"/></NavLink>
        </li>
        <li>
            <NavLink className={"nav-link"} to='/planner'><SavingsLogo className="icon" viewBox="0 0 48 48"/></NavLink>
        </li>
        <li>
            <NavLink className={"nav-link"} to='/profile'><ProfileLogo className="icon" viewBox="0 0 48 48"/></NavLink>
        </li>
      </div>
    </nav>
  );
};

export default NavBar;
