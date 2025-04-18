import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import Landing from "./pages/landing.tsx";
import Leaderboard from "./pages/leaderboard.tsx";
import Account from "./pages/account.tsx";
import About from "./pages/about.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => (
  <BrowserRouter>
<div className="flex flex-col h-screen">
  <NavBar />
  <main className="flex-1">
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/account" element={<Account />} />
      <Route path="/about" element={<About />} />
    </Routes>
</main>
  <Footer/>
</div></BrowserRouter>
)

export default App
