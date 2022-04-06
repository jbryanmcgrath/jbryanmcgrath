import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages'
import ResumePage from './pages/ResumePage';



function App() {
  return (
    <Router>
      <Home />
      {/* <ResumePage /> */}
    </Router>
  );
}

export default App;
