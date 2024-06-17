const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const configureTwig = require('./config/twigConfig');
const routesDirectory = path.join(__dirname, 'routes/modules');

function loadRouteModules(directory) {
	const modulesByCategory = {};
	const files = fs.readdirSync(directory);
	files.forEach(file => {
		const filePath = path.join(directory, file);
		if (path.extname(file) === '.js') {
			const moduleData = require(filePath);
			app.use(moduleData.router); // Use the router at the specified path
			if (!modulesByCategory[moduleData.category]) {
				modulesByCategory[moduleData.category] = [];
			}
			modulesByCategory[moduleData.category].push({
				name: moduleData.name,
				path: moduleData.path,
				hideNav: moduleData.hideNav,
			});
		}
	});
	return modulesByCategory;
}


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

loadRouteModules(routesDirectory)
configureTwig(app, express);

const categorizedModules = loadRouteModules(routesDirectory);
app.locals.modulesByCategory = categorizedModules;


const homeRoutes = require('./routes/homeRoutes');
app.use(homeRoutes);

app.set('trust proxy', true);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
