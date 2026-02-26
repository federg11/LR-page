import { useEffect, useRef, useState } from 'react';

/**
 * Hook para detectar cuando un elemento entra en el viewport
 */
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Opcional: dejar de observar después de que aparece
          if (options.once !== false) {
            observer.unobserve(element);
          }
        } else if (!options.once) {
          setIsInView(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isInView];
};

/**
 * Variantes de animación
 */
export const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  }
};

/**
 * Componente para animaciones en scroll
 */
export const ScrollAnimation = ({ 
  children, 
  animation = 'fadeInUp', 
  duration = 0.6, 
  delay = 0,
  once = true,
  threshold = 0.1,
  rootMargin = '0px',
  className = ''
}) => {
  const [ref, isInView] = useInView({ once, threshold, rootMargin });
  const variant = animationVariants[animation] || animationVariants.fadeInUp;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? variant.visible.opacity : variant.hidden.opacity,
        transform: isInView 
          ? `translate(${variant.visible.x || 0}px, ${variant.visible.y || 0}px) scale(${variant.visible.scale || 1})`
          : `translate(${variant.hidden.x || 0}px, ${variant.hidden.y || 0}px) scale(${variant.hidden.scale || 1})`,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
