const fs = require('fs');
const path = require('path');

// Function to delete a file if it exists
function deleteFileIfExists(filePath) {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Deleted file: ${filePath}`);
    } else {
        console.log(`File not found: ${filePath}`);
    }
}

// Get module name from command line argument
const moduleName = process.argv[2];
if (!moduleName) {
    console.error('Please provide a module name.');
    process.exit(1);
}

// Define file paths
const jsFilePath = path.join(__dirname, '../src/js/modules', `${moduleName}.js`);
const scssFilePath = path.join(__dirname, '../src/scss/modules', `_${moduleName}.scss`);
const twigFilePath = path.join(__dirname, '../views/modules', `${moduleName}.twig`);
const loaderFilePath = path.join(__dirname, '../src/js/theme', 'loader.js');
const routeFilePath = path.join(__dirname, '../express/routes/modules', `${moduleName}Routes.js`);

// Delete files
deleteFileIfExists(jsFilePath);
deleteFileIfExists(scssFilePath);
deleteFileIfExists(twigFilePath);
deleteFileIfExists(routeFilePath);

// Update loader.js
const loaderContent = fs.readFileSync(loaderFilePath, 'utf8');
const pathOperationRegex = new RegExp(`\\s*'/\\${moduleName}':\\s*async\\s*\\(\\)\\s*=>\\s*\\{[^{}]*(?:\\{[^{}]*\\}[^{}]*)*\\},?`, 'g');
const updatedLoaderContent = loaderContent.replace(pathOperationRegex, '');

fs.writeFileSync(loaderFilePath, updatedLoaderContent);
console.log(`Updated loader.js at ${loaderFilePath}`);
