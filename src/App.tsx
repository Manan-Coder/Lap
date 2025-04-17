import NavBar from "./components/NavBar.tsx";
import { BrowserRouter } from "react-router-dom";
const App = () => (
  <BrowserRouter>
<div className="flex flex-col min-h-screen">
  <NavBar />
</div></BrowserRouter>
)

export default App
