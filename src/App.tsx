import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Shop } from './components/Shop';
import { About } from './components/About';
import { Home } from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
