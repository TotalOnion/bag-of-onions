const fs = require('fs');
const path = require('path');

// Function to create directory if it doesn't exist
function ensureDirectoryExistence(filePath) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

// Get module name from command line argument
const moduleName = process.argv[2];
if (!moduleName) {
    console.error('Please provide a module name.');
    process.exit(1);
}

// Define file paths and contents
const jsFilePath = path.join(__dirname, '../src/js/modules', `${moduleName}.js`);
const scssFilePath = path.join(__dirname, '../src/scss/modules', `_${moduleName}.scss`);
const twigFilePath = path.join(__dirname, '../views/modules', `${moduleName}.twig`);
const loaderFilePath = path.join(__dirname, '../src/js/theme', 'loader.js');
const routeFilePath = path.join(__dirname, '../express/routes/modules', `${moduleName}Routes.js`);

const jsContent = `console.log("hello world");\n`;
const scssContent = `@use "../utils/utils" as *;\n`;
const twigContent = `{% extends '../layouts/base.twig' %}

{% block title %}
    {% set pageTitle = '[Module Name]' %}
    {{ pageTitle }}
{% endblock %}

{% block content %}
        [Your Content]
{% endblock %}

{% block seoContent %}
        [Your SEO Content]
{% endblock %}
`;
const routeContent = `const express = require("express");
const router = express.Router();

router.get("/${moduleName}", (req, res) => {
    res.render("modules/${moduleName}", {
        title: "My Page",
        heading: "Hello, World!",
        message: "This is a message rendered from Twig.js!",
    });
});

module.exports = {
    router: router,
    name: "${moduleName}",
    category: "tool-category",
    path: "/${moduleName}",
    hideNav: false,
};
`;

// Ensure directories exist and create files
ensureDirectoryExistence(jsFilePath);
fs.writeFileSync(jsFilePath, jsContent);
console.log(`Created JS file at ${jsFilePath}`);

ensureDirectoryExistence(scssFilePath);
fs.writeFileSync(scssFilePath, scssContent);
console.log(`Created SCSS file at ${scssFilePath}`);

ensureDirectoryExistence(twigFilePath);
fs.writeFileSync(twigFilePath, twigContent);
console.log(`Created Twig file at ${twigFilePath}`);

// Update loader.js
const loaderContent = fs.readFileSync(loaderFilePath, 'utf8');
const newPathOperation = `
        '/${moduleName}': async () => {
            await loadModuleAndCss( () =>
                import(/* webpackChunkName: "${moduleName}" */ "../modules/${moduleName}.js"),
                '/css/modules/_${moduleName}.css'
            );
        },`;
const updatedLoaderContent = loaderContent.replace(/const pathOperations = {/, `const pathOperations = { ${newPathOperation}`);
fs.writeFileSync(loaderFilePath, updatedLoaderContent);
console.log(`Updated loader.js at ${loaderFilePath} `);

// Ensure directory exists and create route file
ensureDirectoryExistence(routeFilePath);
fs.writeFileSync(routeFilePath, routeContent);
console.log(`Created route file at ${routeFilePath} `);