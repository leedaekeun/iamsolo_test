import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';
import Privacy from './pages/Privacy';

function App() {
    return (
        <BrowserRouter>
            <div className="page-center selection:bg-pink-500/30">
                <Routes>
                    <Route path="/"        element={<Home />} />
                    <Route path="/test"    element={<Test />} />
                    <Route path="/result"  element={<Result />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
