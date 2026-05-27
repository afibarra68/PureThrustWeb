import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { PlatformPage } from './pages/PlatformPage';
import './styles/tokens.css';
import './styles/landing.css';
import './styles/platform-hero.css';
import './App.css';
import './styles/footer.css';
import './styles/responsive.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plataforma" element={<PlatformPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
