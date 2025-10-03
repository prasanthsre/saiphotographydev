import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

import Home from './Components/Home.jsx';
import Portfolio from './Components/Portfolio.jsx';
import VideoPlayer from './Components/VideoPlayer.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* Header always visible */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/videoplayer" element={<VideoPlayer />} />
      </Routes>

      {/* Footer always visible */}
     
    </BrowserRouter>
  );
}

export default App;
