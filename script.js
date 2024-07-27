document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');

    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) { 
        button.style.display = 'flex';
      } else {
        button.style.display = 'none';
      }
    }); 
  });
  