document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.rgb-header');
    const footer = document.querySelector('.rgb-footer');
    
    function createRGBEffect(element) {
      element.addEventListener('mousemove', (e) => {
        const { left, top } = element.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        
        element.style.setProperty('--mouse-x', `${x}px`);
        element.style.setProperty('--mouse-y', `${y}px`);
      });
    }
  
    createRGBEffect(header);
    createRGBEffect(footer);
  });