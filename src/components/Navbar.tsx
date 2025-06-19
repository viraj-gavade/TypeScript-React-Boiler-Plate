import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        
        {/* Hamburger button for mobile */}
        <button 
          className="lg:hidden flex flex-col justify-center items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-4">
          <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
          <li><Link to="/page1" className="hover:text-blue-200">Page1</Link></li>
          <li><Link to="/page2" className="hover:text-blue-200">Page2</Link></li>
          <li><Link to="/page3" className="hover:text-blue-200">Page3</Link></li>
          <li><Link to="/page4" className="hover:text-blue-200">Page4</Link></li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <ul className="flex flex-col mt-4 gap-2">
          <li><Link to="/" className="block py-2 hover:bg-blue-700 px-2 rounded" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/page1" className="block py-2 hover:bg-blue-700 px-2 rounded" onClick={toggleMenu}>Page1</Link></li>
          <li><Link to="/page2" className="block py-2 hover:bg-blue-700 px-2 rounded" onClick={toggleMenu}>Page2</Link></li>
          <li><Link to="/page3" className="block py-2 hover:bg-blue-700 px-2 rounded" onClick={toggleMenu}>Page3</Link></li>
          <li><Link to="/page4" className="block py-2 hover:bg-blue-700 px-2 rounded" onClick={toggleMenu}>Page4</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
