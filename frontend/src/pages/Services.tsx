import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import CTA from '../components/CTA';
import RotatingImages from '../components/RotatingImages';
import '../styles/Services.css';

// Image Imports
import poolHero from '../assets/carousel/pool.jpg';
import saunaHero from '../assets/carousel/sauna.jpg';
import jacuzziHero from '../assets/carousel/jacuzzi.jpg';
import massageRoomHero from '../assets/carousel/massage-room.jpg';
import sportsFieldHero from '../assets/carousel/sports-field.jpg';
import greenAreasHero from '../assets/carousel/green-areas.jpg';
import playgroundHero from '../assets/carousel/playground.jpg';
import eventHallHero from '../assets/carousel/event-hall.jpg';
import cateringHero from '../assets/carousel/catering.jpg';
import foodCourtHero from '../assets/carousel/food-court.jpg';
import coffeeShopHero from '../assets/carousel/coffee-shop.jpg';

// Icon Imports
import pool from '../assets/icons/pool.png';
import heatedPool from '../assets/icons/heated-pool.png';
import drySauna from '../assets/icons/dry-sauna.png';
import steamSauna from '../assets/icons/steam-sauna.png';
import jacuzzi from '../assets/icons/jacuzzi.png';
import hydromassage from '../assets/icons/hydromassage.png';
import massageRoom from '../assets/icons/massage-room.png';
import eventHall from '../assets/icons/event-hall.png';
import eventPlanning from '../assets/icons/event-planning.png';
import greenAreas from '../assets/icons/green-areas.png';
import sportsField from '../assets/icons/sports-field.png';
import azulCourt from '../assets/icons/azul-court.png';
import candyChicken from '../assets/icons/candy-chicken.png';
import coffeeShop from '../assets/icons/coffee-shop.png';
import desserts from '../assets/icons/desserts.png';
import catering from '../assets/icons/catering.png';


type BadgeType = 'incluido' | 'servicio';

interface Service {
  name: string;
  description: string;
  icon: string;
  badge: BadgeType;
  price?: string;
}

interface Section {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  services: Service[];
}

const sections: Section[] = [
  {
    id: 'piscinas-relax',
    title: 'Piscinas y Relajación',
    subtitle: 'El corazón del complejo: agua, calor y descanso para todos.',
    images: [poolHero, saunaHero, jacuzziHero, massageRoomHero],
    services: [
      { name: 'Piscina a Temperatura Ambiente', description: 'Amplias piscinas al aire libre, ideales para disfrutar del sol y el agua en familia durante todo el día.', icon: pool, badge: 'incluido' },
      { name: 'Piscinas Temperada', description: 'Piscinas con agua temperada para nadar cómodamente en cualquier época del año, incluso en días frescos.', icon: heatedPool, badge: 'incluido' },
      { name: 'Sauna Seco', description: 'Sauna finlandés a alta temperatura que relaja los músculos, mejora la circulación y depura el cuerpo.', icon: drySauna, badge: 'incluido' },
      { name: 'Sauna de Vapor', description: 'Baño de vapor húmedo que abre las vías respiratorias, hidrata la piel y libera tensiones acumuladas.', icon: steamSauna, badge: 'incluido' },
      { name: 'Jacuzzi', description: 'Tinas de hidromasaje con chorros a presión para masajear el cuerpo y aliviar el estrés.', icon: jacuzzi, badge: 'incluido' },
      { name: 'Hidromasaje', description: 'Sesiones de hidromasaje terapéutico con chorros dirigidos a zonas específicas del cuerpo.', icon: hydromassage, badge: 'servicio', price: 'Consultar' },
      { name: 'Sala de masajes', description: 'Masajes relajantes y descontracturantes con especialistas certificados en un ambiente tranquilo y privado.', icon: massageRoom, badge: 'servicio', price: 'Consultar' },
    ],
  },
  {
    id: 'areas-deportivas',
    title: 'Áreas Deportivas',
    subtitle: 'Espacio para el deporte, la recreación y la diversión al aire libre.',
    images: [sportsFieldHero, greenAreasHero, playgroundHero],
    services: [
      { name: 'Cancha de fútbol', description: 'Cancha de fútbol 8 con césped en óptimas condiciones para partidos entre amigos, familias o empresas.', icon: sportsField, badge: 'incluido' },
      { name: 'Cancha de futsal', description: 'Cancha de futsal para partidos entre grupos y práctica libre, disponible con iluminación para jugar al atardecer.', icon: sportsField, badge: 'incluido' },
      { name: 'Cancha de básquet', description: 'Aro reglamentario y superficie adecuada para partidos de básquet y práctica libre.', icon: sportsField, badge: 'incluido' },
      { name: 'Cancha de vóley', description: 'Cancha de vóley con red reglamentaria para juegos recreativos y torneos entre grupos.', icon: sportsField, badge: 'incluido' },
      { name: 'Áreas verdes', description: 'Amplios jardines con sombra natural, ideales para descansar, hacer picnic o que los niños jueguen.', icon: greenAreas, badge: 'incluido' },
    ],
  },
  {
    id: 'plaza-comidas',
    title: 'Plaza de Comidas',
    subtitle: 'Comidas, cafetería y postres para todos los gustos.',
    images: [foodCourtHero, cateringHero, coffeeShopHero],
    services: [
      { name: 'Azul Azul Plaza', description: 'Nuestra plaza principal de comidas con menú variado de platos típicos y regionales para todos los gustos.', icon: azulCourt, badge: 'servicio', price: 'Consultar' },
      { name: 'Candy Chicken', description: 'Pollo frito y snacks crujientes, favoritos de grandes y chicos, preparados al momento.', icon: candyChicken, badge: 'servicio', price: 'Consultar' },
      { name: 'Cafetería', description: 'Café, helados y bebidas frías y calientes disponibles durante toda tu visita.', icon: coffeeShop, badge: 'servicio', price: 'Consultar' },
      { name: 'Postres', description: 'Repostería casera: tortas, postres del día, helados y dulces para cerrar con broche de oro.', icon: desserts, badge: 'servicio', price: 'Consultar' },
      { name: 'Catering', description: 'Servicio de catering para eventos, cumpleaños, reuniones empresariales y grupos grandes, con menú a medida.', icon: catering, badge: 'servicio', price: 'Consultar' },
    ],
  },
  {
    id: 'eventos',
    title: 'Eventos',
    subtitle: 'El lugar ideal para tu evento empresarial, familiar o social.',
    images: [eventHallHero],
    services: [
      { name: 'Salón de eventos', description: 'Salón techado y climatizado con capacidad flexible, ideal para eventos sociales, familiares y corporativos.', icon: eventHall, badge: 'servicio', price: 'Consultar' },
      { name: 'Planeación de eventos', description: 'Te acompañamos en cada detalle: decoración, menú, música y logística. Tú solo disfrutas, nosotros organizamos.', icon: eventPlanning, badge: 'servicio', price: 'Consultar' },
      { name: 'Eventos empresariales', description: 'Paquetes corporativos para reuniones, capacitaciones, team building y celebraciones de empresa en un entorno natural.', icon: eventHall, badge: 'servicio', price: 'Consultar' },
    ],
  },
];

function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="servicios">
      {/* Page Hero */}
      <section className="servicios__hero">
        <div className="servicios__hero-overlay" />
        <div className="servicios__hero-content">
          <h1 className="servicios__hero-title">
            Todo lo que puedes hacer en Azul Azul
          </h1>
          <p className="servicios__hero-subtitle">
            Desde un día de relax en las piscinas hasta un partido con amigos o un evento empresarial. Descubre cada espacio.
          </p>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`service-section ${index % 2 === 1 ? 'service-section--alt' : ''}`}
        >
          <div className="service-section__container">
            {/* Section header */}
            <div className="service-section__header">
              <div className="service-section__image">
                <RotatingImages images={section.images} alt={section.title} />
              </div>
              <div className="service-section__header-text">  
                <h2 className="service-section__title">{section.title}</h2>
                <p className="service-section__subtitle">{section.subtitle}</p>
              </div>
            </div>

            {/* Service cards */}
            <div className="service-section__grid">
              {section.services.map((service) => (
                <article key={service.name} className="service-card">
                  <div className="service-card__icon-wrap">
                    <img
                      src={service.icon}
                      alt=""
                      className="service-card__icon"
                      loading="lazy"
                    />
                  </div>
                  <div className="service-card__body">
                    <div className="service-card__header">
                      <h3 className="service-card__title">{service.name}</h3>
                      <span className={`service-card__badge service-card__badge--${service.badge}`}>
                        {service.badge === 'incluido' ? 'Incluido' : 'Servicio'}
                      </span>
                    </div>
                    <p className="service-card__desc">{service.description}</p>
                    {service.price && (
                      <span className="service-card__price">{service.price}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
            {/* Link to fields page */}
            {section.id === 'areas-deportivas' && (
                <div className="service-section__more">
                  <Link to="/canchas-deportivas" className="service-section__more-link">
                    ¿Quieres la cancha solo para tu grupo? Conoce el alquiler y campeonatos
                    <FaArrowRight />
                  </Link>
                </div>
              )}

              {/* Link to food page */}
              {section.id === 'plaza-comidas' && (
                <div className="service-section__more">
                  <Link to="/plaza-comidas" className="service-section__more-link">
                    Ver menú completo y las 3 marcas de la plaza
                    <FaArrowRight />
                  </Link>
                </div>
              )}


            {/* Link to events page */}
            {section.id === 'eventos' && (
              <div className="service-section__more">
                <Link to="/eventos" className="service-section__more-link">
                  Conoce más sobre eventos empresariales
                  <FaArrowRight />
                </Link>
              </div>
            )}
          </div>
        </section>
      ))}

      <CTA />
    </div>
  );
}

export default Services;