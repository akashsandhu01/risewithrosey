function toggleMenu(btn) {
  var links = document.getElementById('nav-links');
  var open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

// Close mobile menu when a link is clicked
document.addEventListener('click', function (e) {
  if (e.target.matches('.nav-links a')) {
    var links = document.getElementById('nav-links');
    links.classList.remove('open');
    var btn = document.querySelector('.menu-toggle');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
});
