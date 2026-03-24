import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apps from '../../data/apps';
import AppCard from '../../components/AppCard/AppCard';
import Loader from '../../components/Loader/Loader';
import heroImg from '../../assets/images/hero.png';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>

      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-0 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">We Build</h1>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mt-1 mb-4 sm:mb-5"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >
            Productive Apps
          </h1>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed mb-8 px-2">
            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>

          <div className="flex justify-center gap-3 flex-wrap mb-10 sm:mb-16 px-4">
            <a href="https://play.google.com/store" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 lg:px-10 lg:py-4 border border-gray-300 bg-gray-100 hover:bg-gray-200 transition w-36 lg:w-auto">
              <i className="fa-brands fa-google-play text-lg text-gray-800"></i>
              <span className="text-sm font-semibold text-gray-800">Google Play</span>
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 lg:px-10 lg:py-4 border border-gray-300 bg-gray-100 hover:bg-gray-200 transition w-36 lg:w-auto">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="App Store" className="w-4 h-4 object-contain" />
              <span className="text-sm font-semibold text-gray-800">App Store</span>
            </a>
          </div>

          <div className="mx-auto w-full overflow-hidden">
            <img src={heroImg} alt="App Preview" className="w-full max-w-4xl mx-auto object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="text-white w-full" style={{ background: 'linear-gradient(135deg, #6d28d9, #7c3aed, #a855f7)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12">Trusted By Millions, Built For You</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex-1 text-center px-4 sm:px-8 py-4">
              <p className="text-white/70 text-xs sm:text-sm font-medium tracking-wide uppercase mb-2">Total Downloads</p>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2">29.6M</h3>
              <p className="text-white/60 text-xs sm:text-sm">21% more than last month</p>
            </div>
            <div className="w-full h-px sm:w-px sm:h-24 bg-white/20"></div>
            <div className="flex-1 text-center px-4 sm:px-8 py-4">
              <p className="text-white/70 text-xs sm:text-sm font-medium tracking-wide uppercase mb-2">Total Reviews</p>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2">906K</h3>
              <p className="text-white/60 text-xs sm:text-sm">46% more than last month</p>
            </div>
            <div className="w-full h-px sm:w-px sm:h-24 bg-white/20"></div>
            <div className="flex-1 text-center px-4 sm:px-8 py-4">
              <p className="text-white/70 text-xs sm:text-sm font-medium tracking-wide uppercase mb-2">Active Apps</p>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2">132+</h3>
              <p className="text-white/60 text-xs sm:text-sm">31 more will launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING APPS */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-8 lg:px-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Trending Apps</h2>
          <p className="text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base">Most downloaded apps this week — handpicked for you</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {apps.slice(0, 8).map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
          <div className="mt-8 sm:mt-12">
            <Link to="/apps" className="inline-flex items-center justify-center text-white text-sm font-medium px-8 py-3 rounded"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
              Show All
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
