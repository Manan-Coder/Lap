import NavBar from "./components/NavBar.tsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.tsx";
const App = () => (
  <BrowserRouter>
<div className="flex flex-col min-h-screen">
  <NavBar />
  <Footer/>
</div></BrowserRouter>
)

export default App
