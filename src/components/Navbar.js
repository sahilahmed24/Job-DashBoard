import Wrapper from "../assets/wrappers/Navbar";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div>{/* <h3 className="logo-text">dashboard</h3> */}</div>
        <div className="btn-container">
          <button type="button" className="btn">
            <FaUserCircle />
            test
            <FaCaretDown />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
