import { useState } from 'react';
import {
  FaFutbol,
  FaBasketballBall,
  FaVolleyballBall,
  FaUsers,
  FaTrophy,
  FaLightbulb,
  FaShower,
  FaWhatsapp,
  FaArrowLeft,
} from 'react-icons/fa';
import CTA from '../components/CTA';
import '../styles/Fields.css';

// Images
import sportsFieldImg from '../assets/carousel/sports-field.jpg';
import greenAreasImg from '../assets/carousel/green-areas.jpg';
import fieldsHeroImg from '../assets/images/Fields.png'
import FieldsHeroVideo from '../assets/videos/Fields.mp4'

const fields = [
  {
    icon: <FaFutbol />,
    name: 'Cancha de Fútbol 8',
    description:
      'Césped en óptimas condiciones, con arcos reglamentarios e iluminación para jugar de noche.',
    specs: ['Fútbol 8', 'Césped natural', 'Iluminación nocturna'],
  },
  {
    icon: <FaFutbol />,
    name: 'Cancha de Futsal',
    description:
      'Cancha de futsal para partidos entre grupos y práctica libre, disponible con iluminación para jugar al atardecer.',
    specs: ['Techada', 'Superficie sintética', 'Iluminación LED'],
  },
  {
    icon: <FaBasketballBall />,
    name: 'Cancha de Básquet',
    description:
      'Aro reglamentario y superficie adecuada para partidos y práctica libre.',
    specs: ['Aro reglamentario', 'Superficie antideslizante'],
  },
  {
    icon: <FaVolleyballBall />,
    name: 'Cancha de Vóley',
    description:
      'Red reglamentaria y espacio amplio para juegos recreativos y torneos entre grupos.',
    specs: ['Red reglamentaria', 'Superficie de arena', 'Espacio para 12 jugadores'],
  },
];

const championshipBenefits = [
  {
    icon: <FaTrophy />,
    title: 'Organización completa',
    description: 'Nos encargamos de fixture, árbitros, horarios y premiación.',
  },
  {
    icon: <FaUsers />,
    title: 'Equipos de empresa',
    description: 'Diseñado para equipos corporativos que buscan integración y competencia sana.',
  },
  {
    icon: <FaLightbulb />,
    title: 'Instalaciones listas',
    description: 'Canchas iluminadas, vestuarios y áreas de descanso para los equipos.',
  },
  {
    icon: <FaShower />,
    title: 'Servicios adicionales',
    description: 'Catering, hidratación y espacio para la premiación incluidos en el paquete.',
  },
];

function Fields() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    company: '',
    fieldType: 'Fútbol 8',
    date: '',
    hours: '',
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
      `Hola, quiero consultar sobre alquiler de canchas en Azul & Azul.\n\n` +
        `Nombre: ${form.name}\n` +
        `Teléfono: ${form.phone}\n` +
        `Empresa/Grupo: ${form.company}\n` +
        `Cancha: ${form.fieldType}\n` +
        `Fecha tentativa: ${form.date}\n` +
        `Horas aproximadas: ${form.hours}\n` +
        `Detalles: ${form.message}`
    );

    window.open(`https://wa.me/59168484028?text=${text}`, '_blank');
  };

  return (
    <div className="canchas">
      {/* Hero */}
      <section className="canchas__hero">
        <video
          className="canchas__hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={fieldsHeroImg}
        >
          <source src={FieldsHeroVideo} type="video/mp4" />
        </video>

        <div className="canchas__hero-overlay" />

        <div className="canchas__hero-content">
          <div className="canchas__hero-inner">
            <span className="canchas__hero-badge">Canchas Deportivas</span>
            <h1 className="canchas__hero-title">
              Alquila la cancha para tu equipo
            </h1>
            <p className="canchas__hero-subtitle">
              Canchas de fútbol 8, futsal, básquet y vóley disponibles para alquiler
              exclusivo. También organizamos campeonatos empresariales completos.
            </p>
            <div className="canchas__hero-actions">
              <a href="#cotizar" className="canchas__hero-btn canchas__hero-btn--primary">
                Consultar disponibilidad
              </a>
              <a
                href="https://wa.me/59168484028?text=Hola,%20quiero%20consultar%20sobre%20alquiler%20de%20canchas"
                target="_blank"
                rel="noopener noreferrer"
                className="canchas__hero-btn canchas__hero-btn--secondary"
              >
                <FaWhatsapp /> Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fields */}
      <section className="canchas-section">
        <div className="canchas-section__container">
          <div className="canchas-section__header">
            <span className="canchas-section__badge">Nuestras canchas</span>
            <h2 className="canchas-section__title">
              Elige la cancha para tu partido
            </h2>
            <p className="canchas-section__subtitle">
              Todas nuestras canchas están en óptimas condiciones y disponibles para
              alquiler por horas.
            </p>
          </div>

          <div className="canchas-grid">
            {fields.map((field) => (
              <article key={field.name} className="cancha-card">
                <div className="cancha-card__icon">{field.icon}</div>
                <h3 className="cancha-card__title">{field.name}</h3>
                <p className="cancha-card__desc">{field.description}</p>
                <ul className="cancha-card__specs">
                  {field.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
                <a href="#cotizar" className="cancha-card__cta">
                  Consultar disponibilidad
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate championships */}
      <section className="canchas-section canchas-section--alt">
        <div className="canchas-section__container">
          <div className="canchas-champ">
            <div className="canchas-champ__content">
              <span className="canchas-section__badge">Para empresas</span>
              <h2 className="canchas-section__title">
                Campeonatos empresariales
              </h2>
              <p className="canchas-champ__text">
                Organizamos campeonatos deportivos completos para empresas, con
                fixture, árbitros, premiación y todo lo necesario para que tu equipo
                viva una experiencia distinta fuera de la oficina.
              </p>
              <p className="canchas-champ__text">
                Ideal para team building, aniversarios de empresa o simplemente para
                reforzar la integración del equipo en un entorno natural.
              </p>
              <a href="#cotizar" className="canchas-champ__cta">
                Solicitar cotización <FaArrowLeft className="canchas-champ__arrow" />
              </a>
            </div>

            <div className="canchas-champ__image">
              <img src={sportsFieldImg} alt="Campeonatos empresariales" loading="lazy" />
            </div>
          </div>

          <div className="canchas-benefits">
            {championshipBenefits.map((benefit) => (
              <div key={benefit.title} className="canchas-benefit">
                <div className="canchas-benefit__icon">{benefit.icon}</div>
                <div>
                  <h3 className="canchas-benefit__title">{benefit.title}</h3>
                  <p className="canchas-benefit__desc">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section className="canchas-section" id="cotizar">
        <div className="canchas-section__container">
          <div className="canchas-form">
            <div className="canchas-form__intro">
              <span className="canchas-section__badge">Cotización</span>
              <h2 className="canchas-form__title">Cuéntanos qué necesitas</h2>
              <p className="canchas-form__text">
                Completa el formulario y te enviamos la disponibilidad y el precio
                por WhatsApp en menos de 24 horas.
              </p>
              <ul className="canchas-form__list">
                <li>Disponibilidad inmediata</li>
                <li>Precio por hora o por paquete</li>
                <li>Opciones para empresas y grupos</li>
              </ul>
              <div className="canchas-form__image">
                <img src={greenAreasImg} alt="Áreas verdes del complejo" loading="lazy" />
              </div>
            </div>

            <form className="canchas-form__form" onSubmit={handleSubmit}>
              <div className="canchas-form__row">
                <div className="canchas-form__field">
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
                <div className="canchas-form__field">
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

              <div className="canchas-form__field">
                <label htmlFor="company">Empresa o grupo (opcional)</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa o grupo"
                />
              </div>

              <div className="canchas-form__row">
                <div className="canchas-form__field">
                  <label htmlFor="fieldType">Cancha de interés *</label>
                  <select
                    id="fieldType"
                    name="fieldType"
                    required
                    value={form.fieldType}
                    onChange={handleChange}
                  >
                    <option>Fútbol 8</option>
                    <option>Futsal</option>
                    <option>Básquet</option>
                    <option>Vóley</option>
                    <option>Campeonato empresarial</option>
                  </select>
                </div>
                <div className="canchas-form__field">
                  <label htmlFor="date">Fecha tentativa</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="canchas-form__field">
                <label htmlFor="hours">Horas aproximadas</label>
                <input
                  id="hours"
                  name="hours"
                  type="text"
                  value={form.hours}
                  onChange={handleChange}
                  placeholder="Ej: 2 horas, o turno completo"
                />
              </div>

              <div className="canchas-form__field">
                <label htmlFor="message">Detalles adicionales</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos qué tienes en mente..."
                />
              </div>

              <button type="submit" className="canchas-form__submit">
                <FaWhatsapp /> Enviar por WhatsApp
              </button>
              <p className="canchas-form__note">
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

export default Fields;