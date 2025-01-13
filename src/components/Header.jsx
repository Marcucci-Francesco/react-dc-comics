import img from "../../public/img/favicon.ico";

const Header = () => {
  return (
    <header>
      <figure>
        <img src={img} alt="logo" />
      </figure>
    </header>
  )
}

export default Header