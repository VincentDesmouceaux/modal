import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <Router>
        <Header visible={visible} setVisible={setVisible} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        {visible && <Modal setVisible={setVisible} />}
      </Router>
    </div>
  );
}

export default App;
