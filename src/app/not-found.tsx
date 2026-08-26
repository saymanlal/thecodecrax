import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 pt-20 flex items-center text-white">
      <Container>
        <div className="max-w-lg mx-auto text-center py-20">
          <p className="text-violet-400 text-8xl font-black mb-4 tracking-tighter">404</p>
          <h1 className="text-3xl font-extrabold text-white mb-4">
            Page not found
          </h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            The page you are looking for doesn&apos;t exist or has moved. Explore our events or head back home.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white font-bold rounded-2xl hover:bg-violet-500 transition-all shadow-lg shadow-violet-600/30"
          >
            <ArrowLeft size={18} />
            <span>Return to Home</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}
