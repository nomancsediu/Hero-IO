import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import apps from '../../data/apps';
import { useInstalled } from '../../hooks/useInstalled';
import { formatDownloads, formatReviews } from '../../utils/format';
import Loader from '../../components/Loader/Loader';
import appErrorImg from '../../assets/images/App-Error.png';

const demoImages = [
  new URL('../../assets/images/demo-app (1).webp', import.meta.url).href,
  new URL('../../assets/images/demo-app (2).webp', import.meta.url).href,
  new URL('../../assets/images/demo-app (3).webp', import.meta.url).href,
  new URL('../../assets/images/demo-app (4).webp', import.meta.url).href,
  new URL('../../assets/images/demo-app (5).webp', import.meta.url).href,
  new URL('../../assets/images/demo-app (6).webp', import.meta.url).href,
];

export default function AppDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { install, isInstalled } = useInstalled();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [id]);

  const app = apps.find(a => a.id === Number(id));

  if (loading) return <Loader />;

  if (!app) return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <img src={appErrorImg} alt="Not Found" className="w-36 sm:w-48 mx-auto mb-6 object-contain" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">App Not Found</h2>
        <p className="text-gray-400 mb-6 text-sm">The app you're looking for doesn't exist or has been removed.</p>
        <button onClick={() => navigate('/apps')} className="btn btn-primary rounded-full px-8">Browse Apps</button>
      </div>
    </div>
  );

  const installed = isInstalled(app.id);
  const thumb = demoImages[(app.id - 1) % demoImages.length];
  const maxCount = Math.max(...app.ratings.map(r => r.count));

  const handleInstall = () => {
    install({ ...app, thumb });
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full px-4 sm:px-8 lg:px-20" style={{ paddingTop: '40px', paddingBottom: '40px' }}>

        {/* ── Top Card ── */}
        <div className="bg-white border border-gray-100 shadow-sm p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row gap-6 items-start">

          {/* Image */}
          <div className="w-full sm:w-48 lg:w-64 h-48 sm:h-48 lg:h-64 overflow-hidden bg-gray-50 shrink-0">
            <img
              src={thumb}
              alt={app.title}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'https://placehold.co/256x256?text=App'; }}
            />
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{app.title}</h1>
              <p className="text-gray-400 text-sm mt-1">Developed by <span className="text-gray-600 font-medium">{app.companyName}</span></p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs uppercase tracking-wide mb-1">
                  <i className="fa-solid fa-download text-xs"></i>
                  <span>Downloads</span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-gray-900">{formatDownloads(app.downloads)}</p>
              </div>
              <div className="w-px h-10 bg-gray-100 hidden sm:block"></div>
              <div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs uppercase tracking-wide mb-1">
                  <i className="fa-solid fa-star text-xs"></i>
                  <span>Ratings</span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-gray-900">{app.ratingAvg}</p>
              </div>
              <div className="w-px h-10 bg-gray-100 hidden sm:block"></div>
              <div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs uppercase tracking-wide mb-1">
                  <i className="fa-solid fa-users text-xs"></i>
                  <span>Total Reviews</span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-gray-900">{formatReviews(app.reviews)}</p>
              </div>
            </div>

            {/* Install button */}
            <button
              onClick={handleInstall}
              disabled={installed}
              className={`w-fit flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-sm font-semibold text-sm transition ${installed ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'text-white hover:opacity-90'}`}
              style={!installed ? { backgroundColor: '#4ade80' } : {}}
            >
              <i className={`fa-solid ${installed ? 'fa-check' : 'fa-download'}`}></i>
              {installed ? 'Installed' : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>

        {/* ── Ratings Breakdown ── */}
        <div className="bg-white border border-gray-100 shadow-sm p-4 sm:p-6 lg:p-8 mt-4 sm:mt-6">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4">Ratings</h2>
          <div className="space-y-3">
            {[...app.ratings].reverse().map((r, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="text-gray-500 w-12 shrink-0 text-xs sm:text-sm">{r.name}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{ width: `${(r.count / maxCount) * 100}%`, backgroundColor: '#FF8811' }}
                  ></div>
                </div>
                <span className="text-gray-400 w-12 sm:w-14 text-right shrink-0 text-xs sm:text-sm">{formatReviews(r.count)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Description ── */}
        <div className="bg-white border border-gray-100 shadow-sm p-4 sm:p-6 lg:p-8 mt-4 sm:mt-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">Description</h2>
          <p className="text-gray-500 leading-relaxed text-sm sm:text-base">{app.description}</p>
        </div>

      </div>
    </div>
  );
}
