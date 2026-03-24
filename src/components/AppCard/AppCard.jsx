import { useNavigate } from 'react-router-dom';
import { formatDownloads } from '../../utils/format';

const demoImages = [
  new URL('../../assets/images/demo-app (1).webp', import.meta.url).href,
  new URL('../../assets/images/demo-app (2).webp', import.meta.url).href,
  new URL('../../assets/images/demo-app (3).webp', import.meta.url).href,
  new URL('../../assets/images/demo-app (4).webp', import.meta.url).href,
  new URL('../../assets/images/demo-app (5).webp', import.meta.url).href,
  new URL('../../assets/images/demo-app (6).webp', import.meta.url).href,
];

export default function AppCard({ app }) {
  const navigate = useNavigate();
  const thumb = demoImages[(app.id - 1) % demoImages.length];

  return (
    <div
      onClick={() => navigate(`/apps/${app.id}`)}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer w-full"
    >
      {/* Image */}
      <div className="w-full overflow-hidden bg-gray-50 p-2 sm:p-3 h-40 sm:h-52 lg:h-64 xl:h-[316px]">
        <img
          src={thumb}
          alt={app.title}
          className="w-full h-full object-cover rounded-xl"
          onError={(e) => { e.target.src = 'https://placehold.co/348x316?text=App'; }}
        />
      </div>

      {/* Bottom content */}
      <div className="p-3 sm:p-4 lg:p-5 flex flex-col">
        <h4 className="font-medium text-xs sm:text-sm text-left mt-1 mb-3 line-clamp-2" style={{ color: '#001931', fontFamily: 'Inter', minHeight: '2.5rem' }}>
          {app.title}
        </h4>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 px-2 py-1 shrink-0" style={{ backgroundColor: '#F1F5E8', borderRadius: '4px' }}>
            <i className="fa-solid fa-download text-xs" style={{ color: '#00D390' }}></i>
            <span className="text-xs font-medium" style={{ color: '#00D390' }}>{formatDownloads(app.downloads)}</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 shrink-0" style={{ backgroundColor: '#FFF0E1', borderRadius: '4px' }}>
            <i className="fa-solid fa-star text-xs" style={{ color: '#FF8811' }}></i>
            <span className="text-xs font-medium" style={{ color: '#FF8811' }}>{app.ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
