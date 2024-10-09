import { useEffect, useRef, useState } from 'react';

interface ViewportSize {
  width: number;
  height: number;
}

const useVisualViewport = () => {
  const [viewport, setViewport] = useState<ViewportSize>(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));
  const previousHeight = useRef(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.visualViewport?.width ?? window.innerWidth;
      const newHeight = window.visualViewport?.height ?? window.innerHeight;

      setViewport({ width: newWidth, height: newHeight });
    };

    const handleOrientationChange = () => {
      setTimeout(handleResize, 100); // Delay to ensure correct values after orientation change
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
      window.visualViewport.addEventListener('scroll', handleResize);
    } else {
      window.addEventListener('resize', handleResize);
    }

    window.addEventListener('orientationchange', handleOrientationChange);

    // Initial call to set correct values
    handleResize();

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
        window.visualViewport.removeEventListener('scroll', handleResize);
      } else {
        window.removeEventListener('resize', handleResize);
      }
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  const heightDifference = previousHeight.current - viewport.height;

  useEffect(() => {
    previousHeight.current = viewport.height;
  }, [viewport.height]);

  return {
    width: viewport.width,
    height: viewport.height,
    heightDifference,
  };
};

export default useVisualViewport;
