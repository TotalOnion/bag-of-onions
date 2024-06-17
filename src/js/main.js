import { themeToggleJs } from './theme/themeToggle.js';
import { sidebarJs } from './theme/sidebar.js';
import { loaderJs } from './theme/loader.js';

document.addEventListener('DOMContentLoaded', () => {
	loaderJs();
	sidebarJs();
	themeToggleJs();
});