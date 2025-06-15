
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/landing-page';
import Login from './components/login';
import Sidebar from './components/sidebar';
import Header from './components/header';
import AssignLocation from './components/assign-work-location';
function App() {
  return (
     <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/header" element={<Header/>}/>
        <Route path="/work-location" element={<AssignLocation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
