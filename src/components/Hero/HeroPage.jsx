import { Route, Routes } from "react-router"
import Navbar from "./navbar/Navbar"
import { GlobalStyles } from "../../globalStyles"
import SearchForm from "../search/SearchForm"

const App = () => {

  return (
    <div>
      < GlobalStyles />
      <Navbar />
      <SearchForm />
      <h1>HeroPage</h1>
      <Routes>
        <Route path="/company" />
        <Route path="/contact" />
        <Route path="/sblog" />
      </Routes>
    </div>
  )
}



export default App