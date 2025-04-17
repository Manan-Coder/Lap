import NavBar from "./components/NavBar.tsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import Landing from "./pages/landing.tsx";
const App = () => (
  <BrowserRouter>
<div className="flex flex-col h-screen">
  <NavBar />
  <main className="flex-1">
<Landing /></main>
  <Footer/>
</div></BrowserRouter>
)

export default App
