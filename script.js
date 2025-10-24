window.addEventListener('load', () => {
  const section = document.querySelector('.profile-section');
  const photo = document.getElementById('profilePhoto');
  const about = document.querySelector('.profile__about');
  const skills = document.querySelector('.profile__skills');

  function revealAll() {
    if (photo) photo.classList.add('show-photo');
    if (about) about.classList.add('show');
    if (skills) skills.classList.add('show');
    // start background chart animations
    document.body.classList.add('animate');
  }

  // If IntersectionObserver is supported, observe the whole section so everything triggers together
  if ('IntersectionObserver' in window && section) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealAll();
          observer.disconnect();
        }
      });
    }, {threshold: 0.2});

    obs.observe(section);
  } else {
    // Fallback: reveal after a short delay
    setTimeout(revealAll, 300);
  }
});