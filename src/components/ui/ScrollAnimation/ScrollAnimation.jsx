import { useInView } from "../../../hooks/useInView";
import { animationVariants } from "../../../constants/animations";

export const ScrollAnimation = ({
  children,
  animation = "fadeInUp",
  duration = 0.6,
  delay = 0,
  once = true,
  threshold = 0.1,
  rootMargin = "0px",
  className = "",
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
