import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import '../styles/PhotoCarousel.css';

// Image Imports
import pool from '../assets/carousel/pool.jpg';
import sauna from '../assets/carousel/sauna.jpg';
import jacuzzi from '../assets/carousel/jacuzzi.jpg';
import massageRoom from '../assets/carousel/massage-room.jpg';
import sportsField from '../assets/carousel/sports-field.jpg';
import greenAreas from '../assets/carousel/green-areas.jpg';
import playground from '../assets/carousel/playground.jpg';
import eventHall from '../assets/carousel/event-hall.jpg';
import catering from '../assets/carousel/catering.jpg';
import foodCourt from '../assets/carousel/food-court.jpg';
import coffeeShop from '../assets/carousel/coffee-shop.jpg';

const slides = [
  { image: pool, title: 'Piscinas', subtitle: 'Temperada y Temperatura Ambiente', badge: 'incluido' },
  { image: sauna, title: 'Sauna', subtitle: 'Seco y Vapor', badge: 'incluido' },
  { image: jacuzzi, title: 'Jacuzzi', subtitle: 'Relájate con hidromasaje', badge: 'incluido' },
  { image: massageRoom, title: 'Sala de Masajes', subtitle: 'Especialistas para tu bienestar', badge: 'servicio' },
  { image: sportsField, title: 'Canchas Deportivas', subtitle: 'Futsal, Fútbol 8, voleibol y básquet', badge: 'incluido' },
  { image: greenAreas, title: 'Áreas Verdes', subtitle: 'Recreación para tus actividades', badge: 'incluido' },
  { image: playground, title: 'Parque Infantil', subtitle: 'Variedad de juegos infantiles', badge: 'incluido' },
  { image: eventHall, title: 'Salón de Eventos', subtitle: 'Planifica con nuestros paquetes', badge: 'servicio' },
  { image: catering, title: 'Catering', subtitle: 'Consulta sobre nuestra especialidad', badge: 'servicio' },
  { image: foodCourt, title: 'Plaza de Comidas', subtitle: 'Disfruta de nuestro menú variado', badge: 'servicio' },
  { image: coffeeShop, title: 'Cafetería', subtitle: 'Postres y Repostería de calidad', badge: 'servicio' },
];

function PhotoCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="carousel">
      <div className="carousel__container">
        <div className="carousel__wrapper">
          {/* Custom prev button — outside the Swiper */}
          <button
            type="button"
            className="carousel__nav carousel__nav--prev"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <Swiper
            modules={[Pagination, Autoplay, FreeMode]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={1.2}
            freeMode={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              1024: { slidesPerView: 3.2, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="carousel__swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="carousel__card">
                  <div className="carousel__card-image">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <span className={`services-table__badge services-table__badge--${slide.badge}`}>
                      {slide.badge === 'incluido' ? 'Incluido' : 'Servicio'}
                    </span>
                    <div className="carousel__card-overlay" />
                  </div>
                  <div className="carousel__card-body">
                    <h3 className="carousel__card-title">{slide.title}</h3>
                    <p className="carousel__card-text">{slide.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom next button — outside the Swiper */}
          <button
            type="button"
            className="carousel__nav carousel__nav--next"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Siguiente"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PhotoCarousel;