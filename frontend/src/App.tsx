import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
// import Footer from './components/Footer';
// import WhatsAppButton from './components/WhatsAppButton';
// import Servicios from './pages/Servicios';
// import Eventos from './pages/Eventos';
// import TourVirtual from './pages/TourVirtual';
// import Contacto from './pages/Contacto';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path="/servicios" element={<Servicios />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/tour-virtual" element={<TourVirtual />} />
            <Route path="/contacto" element={<Contacto />} /> */}
          </Routes>
        </main>
        {/* <Footer />
        <WhatsAppButton /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;