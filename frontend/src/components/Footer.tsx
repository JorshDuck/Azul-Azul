import { Link } from 'react-router-dom';
import logo from '/img/logo-main.png'
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__column footer__column--brand">
            <div className="footer__logo">
              <img src={logo} alt="Azul Azul" className='header__logo-img'/>
            </div>
            <p className="footer__tagline">
              Piscinas, saunas, deportes y gastronomía en un solo lugar.
              Un espacio para disfrutar en familia, con amigos o en eventos empresariales.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer__column">
            <h3 className="footer__heading">Navegación</h3>
            <ul className="footer__list">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/eventos">Eventos</Link></li>
              <li><Link to="/tour-virtual">Tour Virtual</Link></li>
              <li><Link to="/contacto">Contáctanos</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__column">
            <h3 className="footer__heading">Servicios</h3>
            <ul className="footer__list">
              <li><Link to="/servicios#piscinas-relax">Piscinas y Relax</Link></li>
              <li><Link to="/servicios#areas-deportivas">Áreas Deportivas</Link></li>
              <li><Link to="/servicios#plaza-comidas">Plaza de Comidas</Link></li>
              <li><Link to="/eventos">Eventos Empresariales</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__column">
            <h3 className="footer__heading">Contacto</h3>
            <ul className="footer__list footer__list--contact">
              <li>
                <FaMapMarkerAlt
                  className="footer__icon footer__icon--location"
                  aria-hidden="true"
                />
                Av. Blanco Galindo Km 5½ - 1 Km al Norte, Cochabamba
              </li>
              <li>
                <FaPhoneAlt
                  className="footer__icon footer__icon--phone"
                  aria-hidden="true"
                />
                (+591) 68484028
              </li>
              <li>
                <FaClock
                  className="footer__icon footer__icon--clock"
                  aria-hidden="true"
                />
                8:00 – 18:00
              </li>
            </ul>

            {/* Social media */}
            <div className="footer__social">
              <a
                href="https://www.facebook.com/azulazulct.bo"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link footer__social-link--facebook"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/azulazulct.bo/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link footer__social-link--instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@azulazulct.bo"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link footer__social-link--tiktok"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a
                href="https://wa.me/59168484028"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link footer__social-link--whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Complejo Turístico Azul & Azul. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;