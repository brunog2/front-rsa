import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Main from './pages/Main/main';
import Generate from './pages/Generate/generate';
import Encrypt from './pages/Encrypt/encrypt';
import Decrypt from './pages/Decrypt/decrypt';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/" element={<Main />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/encrypt" element={<Encrypt />} />
        <Route path="/decrypt" element={<Decrypt />} />
      </Routes>
    </Router>
  );
}

export default App;
