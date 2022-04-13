import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages'
import Modal from './components/Modal'




function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
