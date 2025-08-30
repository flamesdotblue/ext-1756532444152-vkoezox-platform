import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 antialiased">
      <div className="fixed inset-0 -z-10 opacity-60 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(234,179,8,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(217,119,6,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_90%_0%,rgba(234,88,12,0.08),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"400\" viewBox=\"0 0 400 400\"><defs><pattern id=\"p\" width=\"40\" height=\"40\" patternUnits=\"userSpaceOnUse\"><path d=\"M20 0v40M0 20h40\" stroke=\"#4a3d2c\" stroke-opacity=\"0.15\"/></pattern></defs><rect width=\"100%\" height=\"100%\" fill=\"url(#p)\"/></svg>`)}')`}} />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
