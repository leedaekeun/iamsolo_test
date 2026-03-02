import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';
import Privacy from './pages/Privacy';
import About from './pages/About';
import { Articles } from './pages/Articles';
import { ArticleDetail } from './pages/ArticleDetail';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';
import Header from './components/Header';
import CookieBanner from './components/CookieBanner';

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

function RouteTracker() {
    const location = useLocation();
    useEffect(() => {
        if (typeof window.gtag === 'function') {
            window.gtag('config', 'G-EL9T9LYPNR', { page_path: location.pathname });
        }
    }, [location]);
    return null;
}

function App() {
    return (
        <BrowserRouter>
            <RouteTracker />
            <Header />
            <div className="page-center selection:bg-pink-500/30">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/articles/:id" element={<ArticleDetail />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <CookieBanner />
        </BrowserRouter>
    );
}

export default App;
