const twig = require('twig');
const path = require('path'); // Include path module for resolving paths

const configureTwig = (app, express) => {
    const baseURL = "/";

    // Set view engine and views directory
    app.set('view engine', 'twig');

    // Correct the path to the views directory
    // This assumes your 'views' directory is at the root of your project
    app.set('views', path.join(__dirname, '..', '..', 'views'));

    // Configure static paths
    app.use(express.static(path.join(__dirname, '..', '..', 'public')));
    app.use('/modules', express.static(path.join(__dirname, '..', '..', 'views', 'modules')));

    // Twig extensions
    twig.extendFunction("asset", (path) => {
        return baseURL + path;
    });
};

module.exports = configureTwig;
