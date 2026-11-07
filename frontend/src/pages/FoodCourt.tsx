import { Link } from 'react-router-dom';
import {
  FaUtensils,
  FaCoffee,
  FaHamburger,
  FaWhatsapp,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaWineBottle,
  FaBeer,
  FaDrumstickBite,
  FaBirthdayCake,
  FaCarrot,
} from 'react-icons/fa';
import CTA from '../components/CTA';
import '../styles/FoodCourt.css';

// Images
import foodCourtImg from '../assets/brands/Azul-Court-Banner.png';
import carameloIMG from '../assets/brands/Caramelo-Banner.png';
import candyChickenImg from '../assets/brands/Candy-Chicken-Banner.png';
import azulAzulBrand from '../assets/brands/Azul-Court.png';
import candyChickenBrand from '../assets/brands/Candy-Chicken.png';
import carameloBrand from '../assets/brands/Caramelo.png';

const brands = [
  {
    id: 'azul-azul',
    name: 'Azul Azul',
    tagline: 'Platos típicos y regionales',
    description:
      'Pique macho, churrasco, hamburguesas y más. La parrilla del complejo, con sabor casero y porciones generosas.',
    icon: <FaUtensils />,
    cardImage: azulAzulBrand,
    bannerImage: foodCourtImg,
    hasBanner: true,
  },
  {
    id: 'candy-chicken',
    name: 'Candy Chicken',
    tagline: 'Pollo a la broaster',
    description:
      'Combos de pollo crujiente, milanesas, pipocas y guarniciones. El favorito de grandes y chicos.',
    icon: <FaHamburger />,
    cardImage: candyChickenBrand,
    bannerImage: candyChickenImg,
    hasBanner: true,
  },
  {
    id: 'caramelo',
    name: 'Caramelo Café y Repostería',
    tagline: 'Café y postres caseros',
    description:
      'Café americano, capuccino, brownies, alfajores y repostería artesanal para cerrar tu visita con dulzura.',
    icon: <FaCoffee />,
    cardImage: carameloBrand,
    bannerImage: carameloIMG,
    hasBanner: true,
  },
];

interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const menus: Record<string, MenuCategory[]> = {
  'azul-azul': [
    {
      category: 'Platos principales',
      items: [
        {
          name: 'Pique Macho',
          description: 'Carne picada, chorizo, tomate, cebolla, pimentón y papa frita.',
          price: '40 Bs',
        },
        {
          name: 'Salchipapa',
          description: 'Chorizo y papa frita.',
          price: '20 Bs',
        },
        {
          name: 'Hamburguesa',
          description:
            'Hamburguesa, queso, tomate, cebolla y lechuga servida en pan, con papa frita.',
          price: '20 Bs',
        },
        {
          name: 'Churrasco a la plancha',
          description: 'Churrasco a la plancha acompañado de papas fritas.',
          price: '35 Bs',
        },
      ],
    },
    {
      category: 'Guarniciones',
      items: [
        { name: 'Porción de papa frita', price: '7 Bs' },
        { name: 'Porción de yuca', price: '7 Bs' },
        { name: 'Porción de arroz', price: '7 Bs' },
        { name: 'Porción de ensalada', price: '7 Bs' },
      ],
    },
    {
      category: 'Bebidas',
      items: [
        { name: 'Coca Cola / Fanta / Sprite', description: '300 ml', price: '3.5 Bs' },
        { name: 'Coca Cola / Fanta / Sprite', description: '500 ml', price: '6 Bs' },
        {
          name: 'Coca Cola / Fanta / Sprite / Simba',
          description: '2 Lt',
          price: '12 Bs',
        },
        { name: 'Mineragua', description: '2 Lt', price: '12 Bs' },
        { name: 'Agua', description: '500 ml', price: '6 Bs' },
        { name: 'Agua', description: '2 Lt', price: '12 Bs' },
        { name: 'Powerade', description: '473 ml', price: '8 Bs' },
        { name: 'Jugo del Valle', description: '1 Lt', price: '12 Bs' },
        { name: 'Refresco en vaso', description: '500 ml', price: '6 Bs' },
        { name: 'Malta Real', description: '360 ml', price: '8 Bs' },
      ],
    },
    {
      category: 'Cervezas',
      items: [
        { name: 'Cerveza Huari', description: '330 ml', price: '15 Bs' },
        { name: 'Cerveza Burguesa', description: '330 ml', price: '10 Bs' },
        { name: 'Cerveza Conti Bier', description: '330 ml', price: '10 Bs' },
        { name: 'Licor 51 ICE', price: '15 Bs' },
      ],
    },
  ],
  'candy-chicken': [
    {
      category: 'Combos',
      items: [
        {
          name: 'Combo 1',
          description: '1 presa de pollo y porción de papa frita.',
          price: '18 Bs',
        },
        {
          name: 'Combo 2',
          description: '1 presa de pollo, porción de papa frita y refresco de 500 ml.',
          price: '23 Bs',
        },
        {
          name: 'Combo 3',
          description: '2 presas de pollo y porción de papa frita.',
          price: '25 Bs',
        },
        {
          name: 'Combo 4',
          description: '2 presas de pollo, porción de papa frita y refresco de 500 ml.',
          price: '30 Bs',
        },
      ],
    },
    {
      category: 'Platos',
      items: [
        {
          name: 'Pipocas de pollo',
          description: 'Pipocas de pollo frito y papas fritas.',
          price: '20 Bs',
        },
        {
          name: 'Milanesa de pollo',
          description: 'Milanesa de pollo, papas fritas y ensalada.',
          price: '20 Bs',
        },
      ],
    },
    {
      category: 'Guarniciones',
      items: [
        { name: 'Papas fritas', price: '7 Bs' },
        { name: 'Porción de arroz', price: '7 Bs' },
        { name: 'Ensalada', price: '7 Bs' },
        { name: 'Porción de yuca', price: '7 Bs' },
      ],
    },
  ],
  caramelo: [
    {
      category: 'Cafetería',
      items: [
        { name: 'Café americano', price: '8 Bs' },
        { name: 'Capuccino', price: '15 Bs' },
        { name: 'Caramelo', price: '15 Bs' },
        { name: 'Té o mates', price: '5 Bs' },
        { name: 'Helado soft en cono', price: '5 Bs' },
        { name: 'Helado soft en vaso', price: '7 Bs' },
      ],
    },
    {
      category: 'Repostería',
      items: [
        { name: 'Brownie', price: '6 Bs' },
        { name: 'Queque (porción)', price: '3 Bs' },
        { name: 'Alfajor', price: '5 Bs' },
        { name: 'Gelatina', price: '2 Bs' },
        { name: 'Pudín de chocolate', price: '5 Bs' },
        { name: 'Flan', price: '5 Bs' },
      ],
    },
  ],
};

// Generic icon per menu category
const categoryIcons: Record<string, React.ReactNode> = {
  'Platos principales': <FaUtensils />,
  'Guarniciones': <FaCarrot />,
  'Bebidas': <FaWineBottle />,
  'Cervezas': <FaBeer />,
  'Combos': <FaDrumstickBite />,
  'Platos': <FaDrumstickBite />,
  'Cafetería': <FaCoffee />,
  'Repostería': <FaBirthdayCake />,
};

function FoodCourt() {
  return (
    <div className="food-court">
      {/* Hero */}
      <section className="food-court__hero">
        <img
          src={foodCourtImg}
          alt="Plaza de comidas de Azul & Azul"
          className="food-court__hero-img"
        />
        <div className="food-court__hero-overlay" />
        <div className="food-court__hero-content">
          <div className="food-court__hero-inner">
            <Link to="/servicios#plaza-comidas" className="food-court__back-link">
              ← Volver a Servicios
            </Link>
            <span className="food-court__hero-badge">Plaza de Comidas</span>
            <h1 className="food-court__hero-title">
              Come, descansa y vuelve a la piscina
            </h1>
            <p className="food-court__hero-subtitle">
              Tres marcas, un solo lugar. Platos típicos, pollo a la broaster,
              café y repostería casera para todos los gustos.
            </p>
            <div className="food-court__hero-actions">
              <a href="#menu" className="food-court__hero-btn food-court__hero-btn--primary">
                Ver menú completo
              </a>
              <a
                href="https://wa.me/59168484028?text=Hola,%20quiero%20consultar%20sobre%20la%20plaza%20de%20comidas"
                target="_blank"
                rel="noopener noreferrer"
                className="food-court__hero-btn food-court__hero-btn--secondary"
              >
                <FaWhatsapp /> Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand cards */}
      <section className="food-court-section">
        <div className="food-court-section__container">
          <div className="food-court-section__header">
            <span className="food-court-section__badge">Nuestras marcas</span>
            <h2 className="food-court-section__title">
              Tres opciones, un mismo lugar
            </h2>
            <p className="food-court-section__subtitle">
              Elige entre parrilla, pollo crujiente o café y postres. Todos dentro
              del complejo, sin tener que salir.
            </p>
          </div>

          <div className="food-court-brands">
            {brands.map((brand) => (
              <a
                key={brand.id}
                href={`#${brand.id}`}
                className="brand-card"
              >
                <div className="brand-card__image">
                  <img src={brand.cardImage} alt={brand.name} loading="lazy" />
                  <div className="brand-card__overlay" />
                  <div className="brand-card__icon">{brand.icon}</div>
                </div>
                <div className="brand-card__body">
                  <h3 className="brand-card__title">{brand.name}</h3>
                  <span className="brand-card__tagline">{brand.tagline}</span>
                  <p className="brand-card__desc">{brand.description}</p>
                  <span className="brand-card__cta">
                    Ver menú <FaArrowLeft className="brand-card__arrow" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Menus */}
      <section className="food-court-section food-court-section--alt" id="menu">
        <div className="food-court-section__container">
          <div className="food-court-section__header">
            <span className="food-court-section__badge">Menú</span>
            <h2 className="food-court-section__title">
              Nuestro menú, marca por marca
            </h2>
            <p className="food-court-section__subtitle">
              Precios en bolivianos. Consulta disponibilidad directamente en caja
              o por WhatsApp.
            </p>
          </div>

          {brands.map((brand) => (
            <div key={brand.id} id={brand.id} className="menu-brand">
              {brand.hasBanner && brand.bannerImage ? (
                <div className="menu-brand__banner">
                  <img
                    src={brand.bannerImage}
                    alt={`${brand.name} - banner`}
                    loading="lazy"
                  />
                  <div className="menu-brand__banner-overlay" />
                  <div className="menu-brand__banner-content">
                    <span className="menu-brand__banner-tagline">
                      {brand.tagline}
                    </span>
                    <h3 className="menu-brand__banner-title">{brand.name}</h3>
                  </div>
                </div>
              ) : (
                <div className="menu-brand__title-plain">
                  <span className="menu-brand__banner-tagline">
                    {brand.tagline}
                  </span>
                  <h3 className="menu-brand__banner-title">{brand.name}</h3>
                </div>
              )}

              <div className="menu-brand__categories">
                {menus[brand.id].map((category) => (
                  <div key={category.category} className="menu-category">
                    <h4 className="menu-category__title">{category.category}</h4>
                    <ul className="menu-category__list">
                      {category.items.map((item, idx) => (
                        <li key={`${item.name}-${idx}`} className="menu-item">
                          <div className="menu-item__icon">
                            {categoryIcons[category.category] ?? <FaUtensils />}
                          </div>
                          <div className="menu-item__info">
                            <span className="menu-item__name">{item.name}</span>
                            {item.description && (
                              <span className="menu-item__desc">{item.description}</span>
                            )}
                          </div>
                          <span className="menu-item__price">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="menu-note">
            <FaMapMarkerAlt className="menu-note__icon" />
            <p className="menu-note__text">
              Los precios pueden variar. Consulta disponibilidad directamente en
              la caja de cada marca o escríbenos por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

export default FoodCourt;