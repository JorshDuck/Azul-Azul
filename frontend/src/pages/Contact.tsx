    import { useState } from 'react';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPaperPlane,
} from 'react-icons/fa';
import CTA from '../components/CTA';
import '../styles/Contact.css';

const contactCards = [
  {
    icon: <FaWhatsapp />,
    title: 'WhatsApp',
    value: '+591 68484028',
    description: 'La forma más rápida de contactarnos. Respondemos en horario de atención.',
    href: 'https://wa.me/59168484028?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Azul%20%26%20Azul',
    color: '#25d366',
    cta: 'Abrir WhatsApp',
    external: true,
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Teléfono',
    value: '+591 68484028',
    description: 'Llámanos si prefieres hablar directamente con nosotros.',
    href: 'tel:+59168484028',
    color: '#0077b6',
    cta: 'Llamar ahora',
    external: false,
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Ubicación',
    value: 'Av. Blanco Galindo Km 5½ - 1 Km al Norte, Cochabamba',
    description: 'A 10 minutos del centro de la ciudad, con estacionamiento propio.',
    href: 'https://www.google.com/maps?q=Av.+Blanco+Galindo+Km+5+Cochabamba',
    color: '#ea4335',
    cta: 'Ver en el mapa',
    external: true,
  },
  {
    icon: <FaClock />,
    title: 'Horarios',
    value: 'Todos los días · 8:00 – 18:00',
    description: 'Abierto los 365 días del año. Los horarios pueden variar en feriados.',
    href: null,
    color: '#64ffda',
    cta: null,
    external: false,
  },
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    label: 'Facebook',
    href: 'https://www.facebook.com/azulazulct.bo',
    color: '#1877f2',
    hoverBg: '#1877f2',
  },
  {
    icon: <FaInstagram />,
    label: 'Instagram',
    href: 'https://www.instagram.com/azulazulct.bo',
    color: '#e4405f',
    hoverBg: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
  },
  {
    icon: <FaTiktok />,
    label: 'TikTok',
    href: 'https://www.tiktok.com/@azulazulct.bo',
    color: '#fe2c55',
    hoverBg: '#000000',
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    subject: 'Consulta general',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Hola, quiero contactarme con Azul & Azul.\n\n` +
        `Nombre: ${form.name}\n` +
        `Teléfono: ${form.phone}\n` +
        `Motivo: ${form.subject}\n` +
        `Mensaje: ${form.message}`
    );

    window.open(`https://wa.me/59168484028?text=${text}`, '_blank');
  };

  return (
    <div className="contact">
      {/* Hero */}
      <section className="contact__hero">
        <div className="contact__hero-overlay" />
        <div className="contact__hero-content">
          <span className="contact__hero-badge">Contáctanos</span>
          <h1 className="contact__hero-title">Estamos a un mensaje de distancia</h1>
          <p className="contact__hero-subtitle">
            Consulta disponibilidad, precios, reservas o cualquier duda que tengas.
            Te respondemos lo antes posible.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="contact-section">
        <div className="contact-section__container">
          <div className="contact-cards">
            {contactCards.map((card) => (
              <article key={card.title} className="contact-card">
                <div
                  className="contact-card__icon"
                  style={{ color: card.color }}
                >
                  {card.icon}
                </div>
                <h3 className="contact-card__title">{card.title}</h3>
                <p className="contact-card__value">{card.value}</p>
                <p className="contact-card__desc">{card.description}</p>
                {card.href && card.cta && (
                  <a
                    href={card.href}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noopener noreferrer' : undefined}
                    className="contact-card__cta"
                    style={{ color: card.color }}
                  >
                    {card.cta} →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Form + socials */}
      <section className="contact-section contact-section--alt">
        <div className="contact-section__container">
          <div className="contact-form-wrap">
            {/* Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <span className="contact-section__badge">Escríbenos</span>
              <h2 className="contact-form__title">Envíanos un mensaje</h2>
              <p className="contact-form__text">
                Completa el formulario y se abrirá WhatsApp con tu mensaje listo
                para enviar. Sin registros, sin esperas.
              </p>

              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="name">Nombre *</label>
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
                <div className="contact-form__field">
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

              <div className="contact-form__field">
                <label htmlFor="subject">Motivo de contacto *</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option>Consulta general</option>
                  <option>Reserva de entrada</option>
                  <option>Alquiler de canchas</option>
                  <option>Cotización de eventos</option>
                  <option>Plaza de comidas</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="contact-form__field">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                />
              </div>

              <button type="submit" className="contact-form__submit">
                <FaPaperPlane /> Enviar por WhatsApp
              </button>
              <p className="contact-form__note">
                Al enviar, se abrirá WhatsApp con tu consulta lista para enviar.
              </p>
            </form>

            {/* Socials + extra info */}
            <aside className="contact-aside">
              <span className="contact-section__badge">Síguenos</span>
              <h3 className="contact-aside__title">Nuestras redes</h3>
              <p className="contact-aside__text">
                Publicamos fotos, promociones y novedades. Síguenos para no
                perderte nada.
              </p>

              <div className="contact-socials">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social"
                    aria-label={social.label}
                    style={
                      {
                        '--social-color': social.color,
                        '--social-hover-bg': social.hoverBg,
                      } as React.CSSProperties
                    }
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>

              <div className="contact-aside__divider" />

              <h3 className="contact-aside__title">Antes de venir</h3>
              <ul className="contact-aside__list">
                <li>Reserva por WhatsApp los fines de semana (hay alta demanda).</li>
                <li>Consulta disponibilidad de canchas antes de venir.</li>
                <li>Los eventos empresariales se coordinan con anticipación.</li>
                <li>Trae ropa cómoda y protector solar. El sol de Cochabamba es fuerte.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="contact-section">
        <div className="contact-section__container">
          <div className="contact-map-header">
            <span className="contact-section__badge">Cómo llegar</span>
            <h2 className="contact-section__title">Nuestra ubicación</h2>
            <p className="contact-section__subtitle">
              <FaMapMarkerAlt className="contact-map__pin" />
              Av. Blanco Galindo Km 5½ - 1 Km al Norte, Cochabamba, Bolivia
            </p>
          </div>
          <div className="contact-map">
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

      <CTA />
    </div>
  );
}

export default Contact;