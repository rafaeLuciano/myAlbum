document.addEventListener('DOMContentLoaded', () => {
  const photos = document.querySelectorAll('.photo');
  const popups = document.querySelectorAll('.popup');
  const closes = document.querySelectorAll('.close');

  photos.forEach(photo => {
      photo.addEventListener('click', () => {
          const popupId = photo.getAttribute('data-popup');
          document.getElementById(popupId).style.display = 'flex';
      });
  });

  closes.forEach(close => {
      close.addEventListener('click', (e) => {
          e.target.closest('.popup').style.display = 'none';
      });
  });

  popups.forEach(popup => {
      popup.addEventListener('click', (e) => {
          if (e.target === popup) {
              popup.style.display = 'none';
          }
      });
  });
});
