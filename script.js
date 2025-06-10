// Load brochure image
const img = document.createElement('img');
img.src = 'Brochure.png'; // Case-sensitive!
img.alt = 'Brochure';
img.style.width = '100%';
img.style.display = 'block';

document.getElementById('container').appendChild(img);

// Toggle sidebar
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

// Close sidebar if clicked outside
document.addEventListener('click', function(event) {
  const menu = document.getElementById('menu');
  const button = document.getElementById('menu-button');
  const label = document.getElementById('menu-label');

  if (
    menu.classList.contains('show') &&
    !menu.contains(event.target) &&
    !button.contains(event.target) &&
    !label.contains(event.target)
  ) {
    menu.classList.remove('show');
  }
});
