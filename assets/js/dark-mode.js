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

  var moonIcon = toggle.querySelector('.moon-icon');
  var sunIcon = toggle.querySelector('.sun-icon');

  if (!moonIcon || !sunIcon) {
    console.error('Dark mode icons not found');
    return;
  }

  // Set initial icon based on current theme
  var currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline-block';
  }

  // Toggle dark mode on click
  toggle.addEventListener('click', function(e) {
    e.preventDefault();

    var currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Toggle icon visibility
    if (newTheme === 'dark') {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'inline-block';
    } else {
      moonIcon.style.display = 'inline-block';
      sunIcon.style.display = 'none';
    }
  });
});
