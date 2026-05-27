import { useCallback, useEffect, useRef, type FocusEvent } from 'react';

const AUTO_SLIDE_MS = 4000;
const SCROLL_GAP_PX = 16;

type HorizontalCycleRailOptions = {
  readonly slideSelector: string;
  readonly autoSlideMs?: number;
};

export function useHorizontalCycleRail({
  slideSelector,
  autoSlideMs = AUTO_SLIDE_MS,
}: HorizontalCycleRailOptions) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const getSlideStep = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return 320;
    }

    const slide = viewport.querySelector<HTMLElement>(slideSelector);
    return slide ? slide.offsetWidth + SCROLL_GAP_PX : 320;
  }, [slideSelector]);

  const scroll = useCallback(
    (direction: -1 | 1) => {
      const viewport = viewportRef.current;
      if (!viewport) {
        return;
      }

      const distance = getSlideStep() * direction;

      if (direction === 1) {
        const maxScroll = viewport.scrollWidth - viewport.clientWidth;
        if (viewport.scrollLeft >= maxScroll - 4) {
          viewport.scrollTo({ left: 0, behavior: 'smooth' });
          return;
        }
      }

      if (direction === -1 && viewport.scrollLeft <= 4) {
        viewport.scrollTo({ left: viewport.scrollWidth, behavior: 'smooth' });
        return;
      }

      viewport.scrollBy({ left: distance, behavior: 'smooth' });
    },
    [getSlideStep],
  );

  const scrollNext = useCallback(() => scroll(1), [scroll]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReduced.matches) {
      return;
    }

    const tick = () => {
      if (pausedRef.current || document.hidden) {
        return;
      }
      scrollNext();
    };

    const intervalId = window.setInterval(tick, autoSlideMs);

    const onVisibilityChange = () => {
      if (!document.hidden) {
        pausedRef.current = false;
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [scrollNext, autoSlideMs]);

  const pause = useCallback(() => {
    pausedRef.current = true;
  }, []);

  const resume = useCallback(() => {
    pausedRef.current = false;
  }, []);

  const railProps = {
    onMouseEnter: pause,
    onMouseLeave: resume,
    onFocusCapture: pause,
    onBlurCapture: (event: FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
        resume();
      }
    },
  };

  return { viewportRef, scroll, railProps };
}
