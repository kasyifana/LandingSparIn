import { HelmetProvider, Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import Features from './components/Features';
import Sports from './components/Sports';
import HowItWorks from './components/HowItWorks';
import Ranking from './components/Ranking';
import Community from './components/Community';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SparIn - Find Your Sports Partner | Badminton, Futsal, Tennis & More</title>
        <meta
          name="description"
          content="Connect with local sports enthusiasts, create sparring rooms, track your ranking and join sports communities. Available on Android."
        />
        <meta
          name="keywords"
          content="sparring partner, sports matching, badminton partner, futsal partner, sports community app, find sports partner, olahraga, partner olahraga"
        />
        <meta property="og:title" content="SparIn - Find Your Sports Partner" />
        <meta property="og:description" content="The easiest way to find your sparring partner. Connect, compete, and grow!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SparIn - Find Your Sports Partner" />
        <meta name="twitter:description" content="The easiest way to find your sparring partner" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      <div className="min-h-screen bg-neutral-dark text-white overflow-x-hidden">
        <Hero />
        <Features />
        <Sports />
        <HowItWorks />
        <Ranking />
        <Community />
        <Download />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
