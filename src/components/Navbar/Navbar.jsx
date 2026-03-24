import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'font-semibold underline underline-offset-4'
      : 'text-gray-600 hover:text-primary transition-colors font-medium';

  const activeLinkStyle = { background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' };

  return (
    <>
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-md">
        <nav className="w-full h-16 flex justify-between items-center px-4 sm:px-8 lg:px-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="HeroIO" className="h-7 sm:h-8 w-auto" />
            <span
              className="text-base sm:text-lg font-bold tracking-tight"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
            >
              Hero.IO
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" end className={linkClass} style={({ isActive }) => isActive ? activeLinkStyle : {}}>Home</NavLink>
            <NavLink to="/apps" className={linkClass} style={({ isActive }) => isActive ? activeLinkStyle : {}}>Apps</NavLink>
            <NavLink to="/installation" className={linkClass} style={({ isActive }) => isActive ? activeLinkStyle : {}}>Installation</NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="https://github.com" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white text-sm font-medium px-6 lg:px-8 py-2.5 lg:py-3 rounded"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
              <i className="fa-brands fa-github"></i>
              Contribute
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 text-xl z-50"
            onClick={() => setMenuOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-2xl transition-transform duration-300 md:hidden flex flex-col ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="HeroIO" className="h-7 w-auto" />
            <span className="text-base font-bold" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Hero.IO
            </span>
          </Link>
          <button onClick={() => setMenuOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition">
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col gap-1 px-4 py-6">
          {[{ to: '/', label: 'Home', end: true }, { to: '/apps', label: 'Apps' }, { to: '/installation', label: 'Installation' }].map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-xl text-lg font-medium transition hover:bg-gray-50 ${isActive ? 'font-bold' : 'text-gray-700'}`
                }
                style={({ isActive }) => isActive ? activeLinkStyle : {}}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="px-4 mt-auto pb-8">
          <a href="https://github.com" target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 text-white text-sm font-medium px-6 py-3 rounded w-full"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
            <i className="fa-brands fa-github"></i>
            Contribute
          </a>
        </div>
      </div>
    </>
  );
}
