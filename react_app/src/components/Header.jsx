import "./Header.css";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
  // Destructuring props to get title
  const Header = ({ title, theme, setTheme }) => {

    function toggleTheme() {
      if(theme === "light") {
        setTheme("dark");
      }else {
        setTheme("light");
      }
    }
  return (
    <nav>
      <h1>{title}</h1>
      <span onClick={toggleTheme}>
        {theme==="dark" ? <FiSun size={30}/> : <IoMoonOutline size={30}/> }
      </span>
      
    </nav>    
  );
};


export default Header;
