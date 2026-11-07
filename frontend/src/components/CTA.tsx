import { Link } from 'react-router-dom';
import '../styles/CTA.css';

function CTA() {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">
            ¿Listo para disfrutar de un día diferente?
          </h2>
          <p className="cta__subtitle">
            Reserva tu visita, consulta disponibilidad o pregúntanos lo que necesites.
            Estamos a un mensaje de distancia.
          </p>
          <div className="cta__actions">
            <a
              href="https://wa.me/59168484028?text=Hola,%20quiero%20reservar%20en%20Azul%20%26%20Azul"
              target="_blank"
              rel="noopener noreferrer"
              className="cta__btn cta__btn--primary"
            >
              Reservar por WhatsApp
            </a>
            <Link to="/contacto" className="cta__btn cta__btn--secondary">
              Ver formas de contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;