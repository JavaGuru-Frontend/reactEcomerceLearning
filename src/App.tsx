import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Product from './pages/product/Product';

function App() {
  return (


    <Router>


		
      <nav className="navbar bg-base-100 mb-48 ">
		 <div className='container'>
			<div className="navbar-start">	
				<a class="btn btn-ghost text-xl">Test Commerce inc.</a>
			</div>

			<div className="navbar-center">
				<ul className="menu menu-horizontal px-1">
				<li>
					<Link className='' to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/product">Products</Link>
				</li>
			</ul>
		  </div>
		  
		  <div class="navbar-end">
   			 <a class="btn">Register</a>
    			<button class="btn btn-ghost btn-circle">
     				 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
   			 </button>
    			<button class="btn btn-ghost btn-circle">
					 <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
      			  <div class="indicator">
          				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          				<span class="badge badge-sm indicator-item">0</span>
        				</div>
      			</div>
   			 </button>
  			</div>
		</div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
