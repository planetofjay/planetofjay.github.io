import '../styles/Scroll.css';
import { useState, useEffect } from 'react';

const scrollOptions = {
  top: 0,
  left: 0,
  behavior: 'smooth'
};

const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;

const scrollToTop = () => supportsNativeSmoothScroll 
? window.scrollTo(scrollOptions)
: window.scrollTo(scrollOptions.left, scrollOptions.top);

export default function Scroll() {
  const onClick = () => {
    const focusableElement = document.querySelector('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    scrollToTop();

    focusableElement.focus({
      preventScroll: true,
    })
  };

  const [showButton, setShowButton] = useState(false);

  const onScroll = () => {
    // You can adjust this to show earlier/later
    if (!showButton && window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line
  }, []);

  return (
    showButton && <button onClick={onClick}>
      <span>Back to top</span>
    </button>
  );
}