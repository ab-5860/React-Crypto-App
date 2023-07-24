import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coin/:id" element={<CoinDetails />}></Route>
          <Route path="/coins" element={<Coins />}></Route>
          <Route path="/exchanges" element={<Exchanges />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
