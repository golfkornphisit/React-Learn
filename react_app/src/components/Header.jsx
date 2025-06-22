import "./Header.css";
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
      <button onClick={toggleTheme}>Ligth/Dark : {theme}</button>
    </nav>    
  );
};


export default Header;
