
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/landing-page';
import Login from './components/login';
function App() {
  return (
     <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
