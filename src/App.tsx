import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';

function App() {
    return (
        <BrowserRouter>
            <div className="font-[family-name:var(--font-geist-sans)] min-h-screen bg-slate-900 text-slate-100 selection:bg-pink-500/30">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
