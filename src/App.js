import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages'
import Contact from './components/ContactMe/index'


function App() {
  return (
    <Router>
      <Home />
      <Contact />
    </Router>
  );
}

export default App;
