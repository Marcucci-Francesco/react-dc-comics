import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { menuHeader, listFooter } from "../data/menu";



const App = () => {
  return (
    <>
      <Header menuHeader={menuHeader} />
      <Main />
      <Footer listFooter={listFooter} />
    </>
  )
}

export default App