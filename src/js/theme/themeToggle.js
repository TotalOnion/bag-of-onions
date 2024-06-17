export function themeToggleJs() {
    var storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        document.body.setAttribute('data-theme', storedTheme);
        document.getElementById('toggler').checked = (storedTheme === 'light');
    }
    document.getElementById('toggler').addEventListener('change', function (event) {
        var theme = event.target.checked ? 'light' : 'dark';
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);  // Store the theme in localStorage
    });
}