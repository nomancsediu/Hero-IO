import { useState, useEffect, useCallback } from 'react';
import apps from '../../data/apps';
import AppCard from '../../components/AppCard/AppCard';
import Loader from '../../components/Loader/Loader';

export default function AllApps() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const handleSearch = useCallback((e) => {
    setSearching(true);
    setQuery(e.target.value);
    setTimeout(() => setSearching(false), 300);
  }, []);

  let filtered = apps.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <Loader />;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Title Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto px-4 sm:px-8 lg:px-20 py-8 sm:py-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">Our All Application</h1>
          <p className="text-gray-400 text-sm sm:text-base">Explore All Trending Apps on the Market developed by us</p>
        </div>
      </section>

      <div className="mx-auto px-4 sm:px-8 lg:px-20 py-6 sm:py-8">
        {/* Search & Stats Bar */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 sm:p-4 mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-primary/10 text-primary font-bold text-sm px-3 py-1 rounded-full">
              ({filtered.length}) Apps Found
            </span>
          </div>
          <label className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 w-full sm:w-64 bg-gray-50 focus-within:border-primary transition-colors">
            <i className="fa-solid fa-magnifying-glass text-gray-400 text-sm"></i>
            <input
              type="text"
              placeholder="Search apps..."
              value={query}
              onChange={handleSearch}
              className="bg-transparent outline-none text-sm flex-1 text-gray-700 placeholder-gray-400"
            />
          </label>
        </div>

        {/* Apps Grid */}
        {searching ? (
          <Loader />
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 sm:py-24 bg-white rounded-2xl border border-gray-100">
            <i className="fa-solid fa-magnifying-glass text-4xl sm:text-5xl text-gray-200 mb-4"></i>
            <p className="text-lg sm:text-xl font-semibold text-gray-400">No App Found</p>
            <p className="text-gray-300 text-sm mt-1">Try searching with a different keyword</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filtered.map(app => <AppCard key={app.id} app={app} />)}
          </div>
        )}
      </div>
    </div>
  );
}
