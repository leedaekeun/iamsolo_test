import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';
import Privacy from './pages/Privacy';
import About from './pages/About';

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
            <div className="page-center selection:bg-pink-500/30">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
