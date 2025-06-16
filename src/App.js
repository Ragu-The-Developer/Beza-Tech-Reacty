
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/landing-page';
import Login from './components/login';
import Sidebar from './components/sidebar';
import AssignTask from './components/assign-task';
function App() {
  return (
     <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/assign-task" element={<AssignTask/>}/>
      </Routes>
    </Router>
  );
}

export default App;
