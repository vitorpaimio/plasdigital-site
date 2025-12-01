import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load components below the fold for performance
const ProblemComparison = lazy(() => import('./components/ProblemComparison'));
const Methodology = lazy(() => import('./components/Methodology'));
const BentoGrid = lazy(() => import('./components/BentoGrid'));
const Authority = lazy(() => import('./components/Authority'));
const Cases = lazy(() => import('./components/Cases'));
const CallToAction = lazy(() => import('./components/CallToAction'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div className="w-full py-24 flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main>
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
          <ProblemComparison />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Methodology />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <BentoGrid />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Cases />
        </Suspense>

        <Suspense fallback={<LoadingFallback />}>
          <Authority />
        </Suspense>
        
        <Suspense fallback={<LoadingFallback />}>
          <CallToAction />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-20 bg-neutral-50" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;