import logo from '../../assets/images/logo.png';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-5">

      {/* Logo with pulse ring */}
      <div className="relative flex items-center justify-center">
        <span className="absolute w-24 h-24 rounded-full animate-ping opacity-20"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}></span>
        <span className="absolute w-20 h-20 rounded-full animate-pulse opacity-30"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}></span>
        <img src={logo} alt="HeroIO" className="w-14 h-14 object-contain relative z-10" />
      </div>

      {/* Brand name */}
      <span
        className="text-2xl font-black tracking-tight"
        style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
      >
        Hero.IO
      </span>

      {/* Animated dots */}
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className="w-2 h-2 rounded-full animate-bounce"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)', animationDelay: `${i * 0.15}s` }}
          ></span>
        ))}
      </div>

    </div>
  );
}
