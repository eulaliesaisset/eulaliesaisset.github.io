// Dark mode initialization (runs immediately)
(function() {
  var savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

// Dark mode toggle (runs after DOM loads)
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.getElementById('dark-mode-toggle');

  if (!toggle) {
    console.error('Dark mode toggle button not found');
    return;
  }

  var icon = toggle.querySelector('.dark-mode-icon');

  if (!icon) {
    console.error('Dark mode icon not found');
    return;
  }

  // Set initial icon based on current theme
  var currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    icon.textContent = '☀️';
  }

  // Toggle dark mode on click
  toggle.addEventListener('click', function(e) {
    e.preventDefault();

    var currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Toggle icon
    if (newTheme === 'dark') {
      icon.textContent = '☀️';
    } else {
      icon.textContent = '🌙';
    }
  });
});
