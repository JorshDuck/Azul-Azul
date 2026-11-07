import '../styles/ServicesTable.css';

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

const columns = [
  {
    id: 'pool-relax',
    title: 'Piscinas y Relajación',
    items: [
      { name: 'Piscinas Temperatura Ambiente', icon: pool },
      { name: 'Piscinas Temperadas', icon: heatedPool },
      { name: 'Sauna Seco', icon: drySauna },
      { name: 'Sauna Vapor', icon: steamSauna },
      { name: 'Jacuzzi', icon: jacuzzi },
      { name: 'Hidromasaje', icon: hydromassage },
      { name: 'Sala de Masajes', icon: massageRoom },
    ],
  },
  {
    id: 'sports-area',
    title: 'Áreas Deportivas',
    items: [
      { name: 'Cancha de fútbol', icon: sportsField },
      { name: 'Cancha de futsal', icon: sportsField },
      { name: 'Cancha de básquet', icon: sportsField },
      { name: 'Cancha de vóley', icon: sportsField },
      { name: 'Áreas verdes de recreación', icon: greenAreas },
    ],
  },
  {
    id: 'food-court',
    title: 'Plaza de Comidas',
    items: [
      { name: 'Azul Azul Plaza', icon: azulCourt },
      { name: 'Candy Chicken', icon: candyChicken },
      { name: 'Cafetería', icon: coffeeShop },
      { name: 'Postres', icon: desserts },
      { name: 'Catering', icon: catering },
    ],
  },
  {
    id: 'events',
    title: 'Eventos',
    items: [
      { name: 'Salón de eventos', icon: eventHall },
      { name: 'Planeación de eventos', icon: eventPlanning },
      { name: 'Eventos empresariales', icon: eventHall },
    ],
  },
];

function ServicesTable() {
  return (
    <section className="services-table">
      <div className="services-table__container">
        <div className="services-table__header">
          <h2 className="services-table__title">
            Nuestros Servicios
          </h2>
        </div>

        <div className="services-table__grid">
          {columns.map((column) => (
            <div key={column.id} className="services-table__column">
              <div className="services-table__column-header">
                <h3 className="services-table__column-title">{column.title}</h3>
              </div>
              <ul className="services-table__list">
                {column.items.map((item) => (
                  <li key={item.name} className="services-table__item">
                    <img
                      src={item.icon}
                      alt=""
                      className="services-table__item-icon"
                      loading="lazy"
                    />
                    <span className="services-table__item-name">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesTable;