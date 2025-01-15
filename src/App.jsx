import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { menuHeader, listFooter } from "../data/menu";
import comics from "../data/vue-dc-comics-2/comics";



const App = () => {
  return (
    <>
      <Header menuHeader={menuHeader} />
      <Main comics={comics} />
      <Footer listFooter={listFooter} />
    </>
  )
}

export default App