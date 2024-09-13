import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
// import NewsPage from './pages/News'
// import ContactPage from './pages/Contact'
import './App.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default App;


