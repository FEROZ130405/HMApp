import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const styles = {
    app: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      overflowX: 'hidden',
    },
  };

  return (
    <Router>
      <div style={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Other routes can go here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
