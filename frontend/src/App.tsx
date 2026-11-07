import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Events from './pages/Events';
import Fields from './pages/Fields'
import FoodCourt from './pages/FoodCourt';
import Contact from './pages/Contact';
import Propuesta from './pages/Propuesta';
import './App.css';

function App() {
  return (
    // basename='/Azul-Azul/'
    <BrowserRouter basename='/Azul-Azul/'> 
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
              <Route path="/canchas-deportivas" element={<Fields />} />
              <Route path="/plaza-comidas" element={<FoodCourt />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/propuesta" element={<Propuesta />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;