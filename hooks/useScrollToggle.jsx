import { useEffect, useState, useCallback } from 'react';
import { throttle } from '../libs/utils';

const useScrollToggle = initState => {
  const [scrollFlag, setScrollFlag] = useState(initState);

  const updateScroll = () => {
    const { scrollY } = window;
    scrollY > 10 ? setScrollFlag(true) : setScrollFlag(false);
  };
  const handleScroll = useCallback(throttle(updateScroll, 100), []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return scrollFlag;
};

export default useScrollToggle;
