import '../styles/Propuesta.css';

interface PricingItem {
  service: string;
  initial: string;
  monthly: string;
  time: string;
}

interface Phase {
  id: string;
  name: string;
  description: string;
  recommended?: boolean;
  items: PricingItem[];
}

const phases: Phase[] = [
  {
    id: 'fase-1',
    name: 'Fase 1 — Esenciales',
    description: 'Lo urgente. La base sobre la que todo lo demás se construye.',
    recommended: true,
    items: [
      {
        service: 'Sitio Web Base',
        initial: 'Bs. 1800 - 2200 Bs',
        monthly: 'Bs. 250 – 300',
        time: '1–2 semanas',
      },
    ],
  },
  {
    id: 'fase-2',
    name: 'Fase 2 — Actualización autónoma',
    description: 'Para que actualices precios y contenido sin depender de nadie.',
    items: [
      {
        service: 'CMS ligero + Capacitacion',
        initial: 'Bs. 1500 – 2000',
        monthly: 'Bs. 300 – 350',
        time: '2-3 semanas',
      },
      {
        service: 'CMS a medida (panel propio)',
        initial: 'Bs. 2500 – 3500',
        monthly: 'Bs. 300 – 350',
        time: '4–8 semanas',
      },
    ],
  },
  {
    id: 'fase-3',
    name: 'Fase 3 — Módulos opcionales',
    description: 'Suma solo lo que necesites, cuando lo necesites.',
    items: [
      {
        service: 'Automatización WhatsApp API',
        initial: 'Bs. 500 – 1000',
        monthly: 'Bs. 200 – 400',
        time: '1–2 semanas',
      },
      {
        service: 'Automatización Messenger / Instagram',
        initial: 'Bs. 600 – 1200',
        monthly: 'Bs. 350 – 500',
        time: '1 semana',
      },
      {
        service: 'Publicidad en Instagram',
        initial: 'Bs. 0',
        monthly: 'Bs. 300-500',
        time: '3–5 días',
      },
      {
        service: 'Publicidad en Facebook',
        initial: 'Bs. 0',
        monthly: 'Bs. 300-500',
        time: '3–5 días',
      },
      {
        service: 'Publicidad en ambas redes',
        initial: 'Bs. 400 – 600',
        monthly: 'Bs. 1.300 – 2.100',
        time: '5–7 días',
      },
      {
        service: 'SEO básico',
        initial: 'Bs. 500 – 1.000',
        monthly: 'Bs. 300',
        time: '1–2 sem. setup',
      },
    ],
  },
  {
    id: 'fase-4',
    name: 'Servicios adicionales',
    description: 'Disponibles en cualquier momento del proyecto.',
    items: [
      {
        service: 'Producción de contenido (fotos / videos)',
        initial: 'Bs. 500 – 1.500',
        monthly: '—',
        time: '1–2 semanas',
      },
      {
        service: 'CRM básico',
        initial: 'Bs. 3.000 – 5.000',
        monthly: 'Bs. 100 – 200',
        time: '2–4 semanas',
      },
      {
        service: 'Capacitación al personal',
        initial: 'Bs. 200 – 400',
        monthly: '—',
        time: '1 sesión (2h)',
      },
      {
        service: 'Correo corporativo',
        initial: 'Bs. 0',
        monthly: '~Bs. 42',
        time: '1–2 días',
      },
      {
        service: 'Backups automáticos',
        initial: '—',
        monthly: 'Bs. 50 – 100',
        time: '—',
      },
      {
        service: 'Soporte prioritario (< 4h)',
        initial: '—',
        monthly: '+Bs. 200',
        time: '—',
      },
    ],
  },
];

const payments = [
  {
    title: 'Contado',
    price: '−5%',
    description: 'Pago único al inicio. Ahorras un 5% sobre el total del proyecto.',
  },
  {
    title: '2 – 3 cuotas',
    price: 'Sin recargo',
    description: 'Mismo precio, dividido y atado a entregables concretos.',
  },
  {
    title: '4 – 6 cuotas',
    price: '+8%',
    description: 'Financiamiento con recargo. Se aprueba caso a caso.',
  },
];

function Propuesta() {
  const today = new Date();
  const validUntil = new Date();
  validUntil.setDate(today.getDate() + 15);

  const formatDate = (date: Date) =>
    date.toLocaleDateString('es-BO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  return (
    <div className="propuesta">
      {/* Hero */}
      <section className="propuesta__hero">
        <div className="propuesta__hero-inner">
          <span className="propuesta__badge">Propuesta</span>
          <h1 className="propuesta__title">
            Servicios digitales para Azul & Azul
          </h1>
          <p className="propuesta__subtitle">
            Todo lo que necesitas para llevar tu presencia digital al siguiente
            nivel. Precios en bolivianos.
          </p>
          <div className="propuesta__meta">
            <span>Preparada el {formatDate(today)}</span>
            <span className="propuesta__meta-divider" />
            <span>Válida hasta el {formatDate(validUntil)}</span>
          </div>
        </div>
      </section>

      {/* Pricing table */}
      <section className="propuesta__section">
        <div className="propuesta__container">
          <div className="pricing-header">
            <span>Servicio</span>
            <span>Coste inicial</span>
            <span>Coste mensual</span>
            <span>Tiempo</span>
          </div>

          {phases.map((phase) => (
            <div key={phase.id} className="pricing-phase">
              <div className="pricing-phase__header">
                <div>
                  <h2 className="pricing-phase__name">{phase.name}</h2>
                  <p className="pricing-phase__desc">{phase.description}</p>
                </div>
                {phase.recommended && (
                  <span className="pricing-phase__badge">Recomendado</span>
                )}
              </div>

              <div className="pricing-phase__rows">
                {phase.items.map((item, idx) => (
                  <div key={idx} className="pricing-row">
                    <span className="pricing-row__service">{item.service}</span>
                    <div className="pricing-row__cell">
                      <span className="pricing-row__label">Inicial</span>
                      <span className="pricing-row__value">{item.initial}</span>
                    </div>
                    <div className="pricing-row__cell">
                      <span className="pricing-row__label">Mensual</span>
                      <span className="pricing-row__value">{item.monthly}</span>
                    </div>
                    <div className="pricing-row__cell">
                      <span className="pricing-row__label">Tiempo</span>
                      <span className="pricing-row__value">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="pricing-note">
            <p>
              <strong>Nota:</strong> Los precios son en bolivianos. Los costos
              mensuales incluyen hosting, mantenimiento y herramientas. El
              presupuesto de publicidad y el costo por mensaje de WhatsApp se
              pagan directamente a las plataformas (Meta).
            </p>
          </div>
        </div>
      </section>

      {/* Payment options */}
      <section className="propuesta__section propuesta__section--alt">
        <div className="propuesta__container">
          <div className="propuesta__section-header">
            <span className="propuesta__section-badge">Pagos</span>
            <h2 className="propuesta__section-title">Formas de pago</h2>
            <p className="propuesta__section-subtitle">
              Elige la que mejor se adapte a tu flujo de caja.
            </p>
          </div>

          <div className="payments">
            {payments.map((p) => (
              <div key={p.title} className="payment-card">
                <h3 className="payment-card__title">{p.title}</h3>
                <span className="payment-card__price">{p.price}</span>
                <p className="payment-card__desc">{p.description}</p>
              </div>
            ))}
          </div>

          <p className="payments__note">
            Todos los pagos están atados a entregables concretos (inicio, demo,
            publicación). El mantenimiento mensual es independiente y siempre se
            paga por adelantado.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="propuesta__footer">
        <div className="propuesta__container">
          <p className="propuesta__footer-title">¿Empezamos?</p>
          <p className="propuesta__footer-text">
            Escríbeme por WhatsApp y coordinamos la Fase 1 esta misma semana.
          </p>
          <a
            href="https://wa.me/59168484028?text=Hola,%20vi%20la%20propuesta%20y%20quiero%20empezar"
            target="_blank"
            rel="noopener noreferrer"
            className="propuesta__footer-btn"
          >
            Hablemos por WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Propuesta;