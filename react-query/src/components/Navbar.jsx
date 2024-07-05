import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/NavbarList";


const Navbar = () => {
  return (
    <Wrapper>
    <div className="nav-center">
      <span className="logo">MixMaster</span>
      <div className="nav-link">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/newsLetter" className="nav-link">
          Newsletter
        </NavLink>
      </div>
    </div>
    </Wrapper>
  );
};



export default Navbar;
