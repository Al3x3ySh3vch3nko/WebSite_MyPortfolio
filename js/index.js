// Spinner-Preloader
const spinner = document.querySelector('#preloader')
const spinnerNone = () => spinner.style.display = 'none'
const spinnerLoad = () => window.setTimeout(spinnerNone, 4000)
window.addEventListener('load', spinnerLoad)

// Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]')
const loadImg = (entries, observer) =>
{
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => entry.target.classList.remove('lazy-img'));

  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, 
{
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));
