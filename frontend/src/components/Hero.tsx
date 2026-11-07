import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import heroImage from '../assets/images/Hero.png'
import heroVideo from '../assets/videos/Hero.mp4'

function Hero() {
  return (
    <section className="hero" id="main">
      <video
        className='hero__video'
        autoPlay
        muted
        loop
        playsInline
        poster={heroImage}  
      >
        <source src={heroVideo} type='video/mp4' />
      </video>

      {/* Dark Overlay */}
      <div className="hero__overlay" />
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__badge">Cochabamba · Bolivia</span>
          <h1 className="hero__title">
            Azul Azul
            <p className="hero__title-accent"> Complejo Turístico</p>
          </h1>
          <p className="hero__subtitle">
            Encuentra todo lo que necesitas para relajarte y disfrutar con amigos y familiares. Aprovecha nuestros paquetes por temporada y paquetes institucionales.
          </p>
          <div className="hero__actions">
            <Link to="/servicios" className="hero__btn hero__btn--primary">
              Ver Servicios
            </Link>
            <a
              href="https://wa.me/59168484028?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20Azul%20%26%20Azul"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--secondary"
            >
              Reservar por WhatsApp
            </a>
          </div>
          <div className="hero__info">
            <div className="hero__info-item">
              <span className="hero__info-label">Entrada</span>
              <span className="hero__info-value">Bs. 50</span>
            </div>
            <div className="hero__info-divider" />
            <div className="hero__info-item">
              <span className="hero__info-label">Horario</span>
              <span className="hero__info-value">8:00 – 18:00</span>
            </div>
            <div className="hero__info-divider" />
            <div className="hero__info-item">
              <span className="hero__info-label">Ubicación</span>
              <span className="hero__info-value">Av. Blanco Galindo Km 5½ - 1 Km al Norte</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;