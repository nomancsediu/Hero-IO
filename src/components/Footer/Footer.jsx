import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1120] text-white">

      <div className="mx-auto px-4 sm:px-8 lg:px-20 py-8 sm:py-10 flex flex-col sm:flex-row justify-between items-center gap-6">

        {/* Left — Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="HeroIO" className="h-8 w-auto" />
          <span style={{ fontFamily: 'Inter', color: 'white', fontWeight: '400', fontSize: '16px' }}>
            Hero.IO
          </span>
        </div>

        {/* Right — Social Links */}
        <div className="flex flex-col items-center sm:items-end gap-2">
          <p className="text-xs font-medium text-white/50 uppercase tracking-wider">Social Links</p>
          <div className="flex items-center gap-4 text-white/40 text-lg">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="w-full border-t border-white/10"></div>

      <div className="text-center py-4 text-xs text-white/30">
        Copyright © {new Date().getFullYear()} - All right reserved
      </div>

    </footer>
  );
}
