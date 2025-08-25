import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Product from './pages/product/Product';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (

<Router>
 <>
<Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>
		</>
    </Router>
  );
}

export default App;
