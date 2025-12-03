import CardSlider from "./CardSlider";


const demoItems = [
  {
    image: '/olr-cp.webp',
    subtitle: 'CPN López Ríos, Osvaldo',
    alt: 'Imagen del contador olr',
  },
  {
    image: '/olr-cp.webp',
    subtitle: 'CPN López Ríos, Franco',
    alt: 'Taza de café y laptop',
  },
  {
    image: '/olr-cp.webp',
    subtitle: 'Dr López Ríos, Osvaldo',
    alt: 'Ciudad con bokeh',
  },
  {
    image: '/olr-cp.webp',
    subtitle: 'CPN Gómez, Javier',
    alt: 'Árboles con neblina',
  },
  {
    image: '/olr-cp.webp',
    subtitle: 'CPN Coronel, Mónica',
    alt: 'Playa con sol bajo',
  },
  {
    image: '/olr-cp.webp',
    subtitle: 'CPN Gálvez, Federico',
    alt: 'Playa con sol bajo',
  },
  {
    image: '/olr-cp.webp',
    subtitle: 'CPN Brizuela, Luciana',
    alt: 'Playa con sol bajo',
  },
  {
    image: '/olr-cp.webp',
    subtitle: 'CPN Cudugnello, Patricia',
    alt: 'Playa con sol bajo',
  }
]

const Card = () => {
  return (
    <main id="nosotros" className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-dvh bg-red-800 text-neutral-900 dark:text-neutral-100 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center py-10">Nuestro Equipo</h2>
        <CardSlider items={demoItems} />
      </div>
    </main>
  )
}

export default Card