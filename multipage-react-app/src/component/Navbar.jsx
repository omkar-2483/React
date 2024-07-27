import { NavLink } from "react-router-dom";
export default function Navbar() {  
    return (
    <div>
      <nav>
        <NavLink className={(e)=> {return e.isActive ? "red" : "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e)=> {return e.isActive ? "red" : "" }} to="/about"><li>About</li></NavLink>
        <NavLink className={(e)=> {return e.isActive ? "red" : "" }} to="/login"><li>Login</li></NavLink>
      </nav>
    </div>
  );
}
