export const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  const handleScroll = () => {
    parallaxElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.2;
      
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};