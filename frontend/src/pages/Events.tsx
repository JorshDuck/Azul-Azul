import { useState } from 'react';
import {
  FaBuilding,
  FaBirthdayCake,
  FaUsers,
  FaUtensils,
  FaParking,
  FaWifi,
  FaMusic,
  FaChair,
  FaWhatsapp,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import CTA from '../components/CTA';
import '../styles/Events.css';

// Images
import eventHallImg from '../assets/carousel/event-hall.jpg';
import cateringImg from '../assets/carousel/catering.jpg';
import foodCourtImg from '../assets/carousel/food-court.jpg';
import greenAreasImg from '../assets/carousel/green-areas.jpg';
import sportsFieldImg from '../assets/carousel/sports-field.jpg';
import poolImg from '../assets/carousel/pool.jpg';

const eventTypes = [
  {
    icon: <FaBuilding />,
    title: 'Eventos Empresariales',
    description:
      'Reuniones, capacitaciones, lanzamientos de producto y team building en un entorno natural que inspira.',
  },
  {
    icon: <FaBirthdayCake />,
    title: 'Eventos Sociales',
    description:
      'Cumpleaños, aniversarios, graduaciones y celebraciones familiares con espacio para todos.',
  },
  {
    icon: <FaUsers />,
    title: 'Eventos Familiares',
    description:
      'Reuniones familiares amplias con acceso a piscinas, áreas verdes y plaza de comidas.',
  },
];

const amenities = [
  { icon: <FaChair />, label: 'Salón techado y climatizado' },
  { icon: <FaUtensils />, label: 'Catering y menú a medida' },
  { icon: <FaMusic />, label: 'Espacio para música y sonido' },
  { icon: <FaWifi />, label: 'Conexión WiFi' },
  { icon: <FaParking />, label: 'Estacionamiento amplio' },
  { icon: <FaUsers />, label: 'Capacidad flexible según evento' },
];

const gallery = [
  { src: eventHallImg, alt: 'Salón de eventos' },
  { src: cateringImg, alt: 'Catering para eventos' },
  { src: foodCourtImg, alt: 'Plaza de comidas' },
  { src: greenAreasImg, alt: 'Áreas verdes' },
  { src: sportsFieldImg, alt: 'Canchas deportivas' },
  { src: poolImg, alt: 'Piscinas' },
];

function Eventos() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    eventType: 'Evento empresarial',
    guests: '',
    date: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Builds a pre-filled WhatsApp message from the form data
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Hola, quiero cotizar un evento en Azul & Azul.\n\n` +
        `Nombre: ${form.name}\n` +
        `Teléfono: ${form.phone}\n` +
        `Tipo de evento: ${form.eventType}\n` +
        `Invitados aproximados: ${form.guests}\n` +
        `Fecha tentativa: ${form.date}\n` +
        `Detalles: ${form.message}`
    );

    window.open(`https://wa.me/59168484028?text=${text}`, '_blank');
  };

  return (
    <div className="eventos">
      {/* Page hero */}
      <section className="eventos__hero">
        <div className="eventos__hero-overlay" />
        <div className="eventos__hero-content">
          <span className="eventos__hero-badge">Eventos</span>
          <h1 className="eventos__hero-title">
            Tu evento, en un entorno natural
          </h1>
          <p className="eventos__hero-subtitle">
            Salón techado, catering, áreas verdes y piscinas. Todo lo que necesitas
            para un evento empresarial, social o familiar en Cochabamba.
          </p>
          <div className="eventos__hero-actions">
            <a href="#cotizar" className="eventos__hero-btn eventos__hero-btn--primary">
              Cotizar mi evento
            </a>
            <a
              href="https://wa.me/59168484028?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20eventos"
              target="_blank"
              rel="noopener noreferrer"
              className="eventos__hero-btn eventos__hero-btn--secondary"
            >
              <FaWhatsapp /> Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Event types */}
      <section className="eventos-section">
        <div className="eventos-section__container">
          <div className="eventos-section__header">
            <span className="eventos-section__badge">Tipos de evento</span>
            <h2 className="eventos-section__title">
              ¿Qué tipo de evento estás planeando?
            </h2>
            <p className="eventos-section__subtitle">
              Nos adaptamos a tu necesidad, sea corporativa, social o familiar.
            </p>
          </div>

          <div className="eventos-types">
            {eventTypes.map((type) => (
              <article key={type.title} className="eventos-type">
                <div className="eventos-type__icon">{type.icon}</div>
                <h3 className="eventos-type__title">{type.title}</h3>
                <p className="eventos-type__desc">{type.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="eventos-section eventos-section--alt">
        <div className="eventos-section__container">
          <div className="eventos-section__header">
            <span className="eventos-section__badge">Qué incluye</span>
            <h2 className="eventos-section__title">
              Todo lo que tu evento necesita
            </h2>
          </div>

          <div className="eventos-amenities">
            {amenities.map((item) => (
              <div key={item.label} className="eventos-amenity">
                <div className="eventos-amenity__icon">{item.icon}</div>
                <span className="eventos-amenity__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery of past events */}
      <section className="eventos-section">
        <div className="eventos-section__container">
          <div className="eventos-section__header">
            <span className="eventos-section__badge">Galería</span>
            <h2 className="eventos-section__title">
              Eventos que ya celebraron con nosotros
            </h2>
            <p className="eventos-section__subtitle">
              Un vistazo a los espacios donde tu evento puede tomar vida.
            </p>
          </div>

          <div className="eventos-gallery">
            {gallery.map((img) => (
              <div key={img.alt} className="eventos-gallery__item">
                <img src={img.src} alt={img.alt} loading="lazy" />
                <span className="eventos-gallery__label">{img.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="eventos-section eventos-section--alt">
        <div className="eventos-section__container">
          <div className="eventos-section__header">
            <span className="eventos-section__badge">Ubicación</span>
            <h2 className="eventos-section__title">Cómo llegar</h2>
            <p className="eventos-section__subtitle">
              <FaMapMarkerAlt className="eventos-map__pin" /> Av. Blanco Galindo Km 5½ - 1 Km al Norte, Cochabamba
            </p>
          </div>

          <div className="eventos-map">
            <iframe
              title="Ubicación Complejo Turístico Azul & Azul"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.6928957383184!2d-66.20640829999999!3d-17.3785045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3749477dd2b3d%3A0xb5b2faa282320!2sComplejo%20Tur%C3%ADstico%20Azul%20Azul!5e0!3m2!1ses-419!2sbo!4v1793217123466!5m2!1ses-419!2sbo"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="eventos-section" id="cotizar">
        <div className="eventos-section__container">
          <div className="eventos-form">
            <div className="eventos-form__intro">
              <span className="eventos-section__badge">Cotización</span>
              <h2 className="eventos-form__title">Cuéntanos sobre tu evento</h2>
              <p className="eventos-form__text">
                Completa el formulario y te enviamos una cotización por WhatsApp
                en menos de 24 horas. Sin compromiso.
              </p>
              <ul className="eventos-form__list">
                <li>Respuesta en menos de 24 horas</li>
                <li>Cotización sin compromiso</li>
                <li>Menú y paquetes personalizados</li>
              </ul>
            </div>

            <form className="eventos-form__form" onSubmit={handleSubmit}>
              <div className="eventos-form__row">
                <div className="eventos-form__field">
                  <label htmlFor="name">Nombre completo *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="eventos-form__field">
                  <label htmlFor="phone">Teléfono *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Ej: 700 00000"
                  />
                </div>
              </div>

              <div className="eventos-form__row">
                <div className="eventos-form__field">
                  <label htmlFor="eventType">Tipo de evento *</label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={form.eventType}
                    onChange={handleChange}
                  >
                    <option>Evento empresarial</option>
                    <option>Evento social</option>
                    <option>Evento familiar</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="eventos-form__field">
                  <label htmlFor="guests">Número de invitados</label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    value={form.guests}
                    onChange={handleChange}
                    placeholder="Ej: 50"
                  />
                </div>
              </div>

              <div className="eventos-form__field">
                <label htmlFor="date">Fecha tentativa</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                />
              </div>

              <div className="eventos-form__field">
                <label htmlFor="message">Detalles del evento</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos qué tienes en mente..."
                />
              </div>

              <button type="submit" className="eventos-form__submit">
                <FaWhatsapp /> Enviar por WhatsApp
              </button>
              <p className="eventos-form__note">
                Al enviar, se abrirá WhatsApp con tu consulta lista para enviar.
              </p>
            </form>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

export default Eventos;