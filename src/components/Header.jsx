import img from "../../public/img/favicon.ico";

const Header = (props) => {

  const menuHeader = props.menuHeader;

  return (
    <header className="container">
      <figure>
        <img src={img} alt="logo" className="logo" />
      </figure>

      <div className="navbar">
        <ul>
          {menuHeader.map(item => (
            <li key={item}><a href="#">{item}</a></li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header