import "./Header.css";
function Header(props) {
  // Destructuring props to get title
  const { title } = props;
  return (
    <nav>
      <h1>{title}</h1>
      <button>Ligth/Dark</button>
    </nav>    
  );
};
export default Header;
