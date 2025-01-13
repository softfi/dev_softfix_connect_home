import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/footer";
import HeroPage from "./layout/heroPage";
import Features from "./pages/features";

function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/features" element={<Features />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
