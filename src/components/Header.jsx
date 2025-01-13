import img from "../../public/img/favicon.ico";

const Header = () => {
  return (
    <header className="container">
      <figure>
        <img src={img} alt="logo" className="logo" />
      </figure>

      <div className="navbar">
        <ul>
          <li><a href="#">characters</a></li>
          <li><a href="#">comics</a></li>
          <li><a href="#">movies</a></li>
          <li><a href="#">tv</a></li>
          <li><a href="#">games</a></li>
          <li><a href="#">collectibles</a></li>
          <li><a href="#">videos</a></li>
          <li><a href="#">fans</a></li>
          <li><a href="#">news</a></li>
          <li><a href="#">shop</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header