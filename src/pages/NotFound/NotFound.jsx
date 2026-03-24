import { useNavigate } from 'react-router-dom';
import errorImg from '../../assets/images/error-404.png';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <img src={errorImg} alt="404" className="w-56 mx-auto mb-6 object-contain" />
        <h1 className="text-5xl font-extrabold text-primary mb-2">404</h1>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button onClick={() => navigate('/')} className="btn btn-primary rounded-full px-10 gap-2">
          <i className="fa-solid fa-house"></i>
          Back to Home
        </button>
      </div>
    </div>
  );
}
