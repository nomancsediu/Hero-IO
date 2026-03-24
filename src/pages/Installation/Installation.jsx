import { useState, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useInstalled } from '../../hooks/useInstalled';
import { formatDownloads } from '../../utils/format';
import Loader from '../../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';

const sortOptions = [
  { value: '', label: 'Sort by Size' },
  { value: 'high-low', label: 'High → Low' },
  { value: 'low-high', label: 'Low → High' },
];

export default function Installation() {
  const { installed, uninstall } = useInstalled();
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('');
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = (e) => { if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleUninstall = (app) => {
    Swal.fire({
      title: 'Uninstall App?',
      text: `Are you sure you want to uninstall ${app.title}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, Uninstall',
      cancelButtonText: 'Cancel',
      borderRadius: '12px',
    }).then((result) => {
      if (result.isConfirmed) {
        uninstall(app.id);
        toast.success(`${app.title} has been uninstalled.`);
      }
    });
  };

  let list = [...installed];
  if (sort === 'high-low') list.sort((a, b) => b.size - a.size);
  if (sort === 'low-high') list.sort((a, b) => a.size - b.size);

  const activeLabel = sortOptions.find(o => o.value === sort)?.label;

  if (loading) return <Loader />;

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Title */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto px-4 sm:px-8 lg:px-20 py-8 sm:py-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">Your Installed Apps</h1>
          <p className="text-gray-400 text-sm sm:text-base">Explore All Trending Apps on the Market developed by us</p>
        </div>
      </section>

      <div className="mx-auto px-4 sm:px-8 lg:px-20 py-6 sm:py-8">
        {installed.length === 0 ? (
          <div className="bg-white border border-gray-100 shadow-sm text-center py-16 sm:py-24 px-4">
            <i className="fa-solid fa-box-open text-5xl sm:text-6xl text-gray-200 mb-5"></i>
            <p className="text-lg sm:text-xl font-semibold text-gray-400 mb-2">No apps installed yet</p>
            <p className="text-gray-300 text-sm mb-7">Browse apps and click Install to add them here</p>
            <button onClick={() => navigate('/apps')} className="btn btn-primary rounded-full px-8">
              Browse Apps
            </button>
          </div>
        ) : (
          <>
            {/* Bar */}
            <div className="bg-white border border-gray-100 shadow-sm p-3 sm:p-4 mb-4 sm:mb-6 flex items-center justify-between gap-4">
              <span className="bg-primary/10 text-primary font-bold text-sm px-3 py-1 rounded-full">
                ({list.length}) Apps Found
              </span>

              {/* Custom Dropdown */}
              <div className="relative" ref={sortRef}>
                <button
                  onClick={() => setSortOpen(o => !o)}
                  className="flex items-center gap-2 border border-gray-200 px-3 py-2 text-sm bg-gray-50 shadow-md hover:bg-gray-100 transition w-32 sm:w-36 justify-between"
                >
                  <span className="text-gray-700 truncate">{activeLabel}</span>
                  <i className={`fa-solid fa-chevron-down text-xs text-gray-400 transition-transform ${sortOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {sortOpen && (
                  <div className="absolute right-0 mt-1 w-36 sm:w-40 bg-white border border-gray-100 shadow-lg z-10 overflow-hidden">
                    {sortOptions.map(o => (
                      <button
                        key={o.value}
                        onClick={() => { setSort(o.value); setSortOpen(false); }}
                        className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-gray-50 transition text-gray-700"
                      >
                        {o.label}
                        {sort === o.value && <i className="fa-solid fa-check text-primary text-xs"></i>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {list.map(app => (
                <div key={app.id} className="bg-white border border-gray-100 shadow-sm p-3 sm:p-4 flex items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <img
                      src={app.thumb || app.image}
                      alt={app.title}
                      className="w-12 h-12 sm:w-14 sm:h-14 object-cover bg-gray-50 shrink-0"
                      onError={(e) => { e.target.src = 'https://placehold.co/56x56?text=App'; }}
                    />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{app.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-1 sm:mt-1.5 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <i className="fa-solid fa-download text-[10px]"></i>
                          {formatDownloads(app.downloads)}
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="fa-solid fa-star text-amber-400 text-[10px]"></i>
                          {app.ratingAvg}
                        </span>
                        <span className="flex items-center gap-1">
                          <i className="fa-solid fa-weight-hanging text-[10px]"></i>
                          {app.size} MB
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleUninstall(app)}
                    className="flex items-center gap-1.5 shrink-0 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white rounded-sm"
                    style={{ backgroundColor: '#ef4444' }}
                  >
                    <i className="fa-solid fa-trash text-xs"></i>
                    Uninstall
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
