import { useEffect, useRef, useState } from 'react'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

export default function CardSlider({
  items,
  autoPlay = false,
  autoPlayMs = 3000,
  pauseOnHover = true,
  pauseOnInteraction = true,
  dragThreshold = 12,
  flickVelocity = 0.2, // px per ms (máxima sensibilidad)
}) {
  const containerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [visiblePerView, setVisiblePerView] = useState(1)
  const dragStartXRef = useRef(0)
  const dragDeltaXRef = useRef(0)
  const autoPlayRef = useRef(null)
  const isAutoPlayPausedRef = useRef(false)
  const dragStartTimeRef = useRef(0)

  const slideCount = items?.length ?? 0

  // Determine how many cards are visible per view based on breakpoints
  useEffect(() => {
    const computeVisible = () => {
      const w = window.innerWidth
      if (w >= 1024) return 3
      if (w >= 768) return 2
      return 1
    }
    const update = () => setVisiblePerView(computeVisible())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const scrollToIndex = (index, behavior = 'smooth') => {
    if (!containerRef.current) return
    const maxIndex = Math.max(0, (slideCount - visiblePerView))
    const clamped = clamp(index, 0, maxIndex)
    const container = containerRef.current
    const slide = container.children[clamped]
    if (slide) {
      slide.scrollIntoView({ behavior, inline: 'start', block: 'nearest' })
    }
    setCurrentIndex(clamped)
  }

  const previous = (behavior = 'smooth', step = 1) => scrollToIndex(currentIndex - step, behavior)
  const next = (behavior = 'smooth', step = 1) => scrollToIndex(currentIndex + step, behavior)

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }

  const startAutoPlay = () => {
    if (!autoPlay || slideCount <= 1) return
    stopAutoPlay()
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1 >= slideCount ? 0 : prev + 1
        scrollToIndex(nextIndex, 'smooth')
        return nextIndex
      })
    }, autoPlayMs)
  }

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [autoPlay, autoPlayMs, slideCount])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') previous('auto')
      if (e.key === 'ArrowRight') next('auto')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [currentIndex, slideCount])

  const onPointerDown = (e) => {
    e.preventDefault?.()
    setIsDragging(true)
    dragStartXRef.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0
    dragDeltaXRef.current = 0
    dragStartTimeRef.current = Date.now()
    if (pauseOnInteraction) {
      isAutoPlayPausedRef.current = true
      stopAutoPlay()
    }
  }

  const onPointerMove = (e) => {
    if (!isDragging) return
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0
    dragDeltaXRef.current = x - dragStartXRef.current
  }

  const onPointerUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    const elapsed = Math.max(1, Date.now() - dragStartTimeRef.current)
    const delta = dragDeltaXRef.current
    const velocity = Math.abs(delta) / elapsed
    const threshold = dragThreshold

    const isDesktop = visiblePerView >= 3
    const effThreshold = isDesktop ? Math.max(8, Math.floor(dragThreshold * 0.75)) : dragThreshold
    const effFlick = isDesktop ? 0.15 : flickVelocity
    const step = isDesktop ? visiblePerView : 1

    const useInstant = velocity >= effFlick || Math.abs(delta) > effThreshold * 1.5
    if (useInstant) {
      if (delta > 0) previous('auto', step)
      else if (delta < 0) next('auto', step)
    } else if (delta > effThreshold) {
      previous('smooth', step)
    } else if (delta < -effThreshold) {
      next('smooth', step)
    } else {
      scrollToIndex(currentIndex)
    }
    dragDeltaXRef.current = 0
    if (pauseOnInteraction) {
      isAutoPlayPausedRef.current = false
      startAutoPlay()
    }
  }

  return (
    <div className="w-full">
      <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory [scroll-snap-stop:always] gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-4 px-2 sm:px-3 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing select-none [touch-action:pan-y]"
          onMouseDown={onPointerDown}
          onMouseMove={onPointerMove}
          onMouseUp={onPointerUp}
          onTouchStart={onPointerDown}
          onTouchMove={onPointerMove}
          onTouchEnd={onPointerUp}
          onMouseEnter={() => {
            if (pauseOnHover) stopAutoPlay()
          }}
          onMouseLeave={() => {
            onPointerUp()
            if (pauseOnHover && !isAutoPlayPausedRef.current) startAutoPlay()
          }}
        >
            {items?.map((item, idx) => (
            <div
              key={idx}
                className="snap-start shrink-0 w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3"
              aria-roledescription="slide"
              aria-label={`${idx + 1} de ${slideCount}`}
            >
                <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-sm ring-1 ring-black/10 overflow-hidden">
                  <div className="aspect-[4/3] md:aspect-[5/4] lg:aspect-[5/4] xl:aspect-[5/4] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt ?? item.subtitle ?? `Slide ${idx + 1}`}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-sm text-center sm:text-base font-medium text-neutral-800 dark:text-neutral-200 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            onClick={() => previous('smooth', visiblePerView)}
            aria-label="Anterior"
            className="inline-flex items-center justify-center rounded-full bg-white/80 dark:bg-neutral-900/80 text-neutral-900 dark:text-neutral-100 shadow ring-1 ring-black/10 hover:bg-white dark:hover:bg-neutral-900 transition h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M15.78 4.22a.75.75 0 0 1 0 1.06L9.06 12l6.72 6.72a.75.75 0 1 1-1.06 1.06l-7.25-7.25a.75.75 0 0 1 0-1.06l7.25-7.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd"/></svg>
          </button>

          <div className="flex items-center justify-center gap-1.5">
            {Array.from({ length: Math.max(1, slideCount - visiblePerView + 1) }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir al slide ${i + 1}`}
                className={
                  'h-2.5 w-2.5 rounded-full transition-all ' +
                  (i === currentIndex ? 'bg-neutral-900 dark:bg-neutral-100 w-6' : 'bg-neutral-300 dark:bg-neutral-700')
                }
              />
            ))}
          </div>

          <button
            onClick={() => next('smooth', visiblePerView)}
            aria-label="Siguiente"
            className="inline-flex items-center justify-center rounded-full bg-white/80 dark:bg-neutral-900/80 text-neutral-900 dark:text-neutral-100 shadow ring-1 ring-black/10 hover:bg-white dark:hover:bg-neutral-900 transition h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M8.22 19.78a.75.75 0 0 1 0-1.06L14.94 12 8.22 5.28a.75.75 0 1 1 1.06-1.06l7.25 7.25a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0Z" clipRule="evenodd"/></svg>
          </button>
        </div>
      </div>
    </div>
  )
}