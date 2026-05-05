import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background px-4">
      {/* Background blobs */}
      <div className="absolute w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[120px] top-1/4 -left-1/4 pointer-events-none"></div>
      <div className="absolute w-[400px] h-[400px] bg-tertiary-container/10 rounded-full blur-[100px] bottom-1/4 -right-1/4 pointer-events-none"></div>
      
      <div className="glass-card p-12 rounded-3xl flex flex-col items-center text-center z-10 max-w-lg border border-white/10 shadow-2xl">
        <h1 className="text-9xl font-h1 font-bold bg-gradient-to-br from-primary-container to-white bg-clip-text text-transparent drop-shadow-sm mb-4 animate-pulse">404</h1>
        <h2 className="text-h3 font-h3 mb-4 text-white">Page Not Found</h2>
        <p className="text-on-surface-variant mb-8 text-lg">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="px-8 py-4 bg-primary-container text-on-primary-container font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
