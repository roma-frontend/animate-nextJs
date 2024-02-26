const fs = require('fs');
const path = require('path');

function checkEmptyFolders(rootDir) {
    const emptyFolders = [];

    function checkFolder(folder) {
        const files = fs.readdirSync(folder);

        if (files.length === 0) {
            emptyFolders.push(folder);
        } else {
            files.forEach((file) => {
                const fullPath = path.join(folder, file);
                if (fs.statSync(fullPath).isDirectory()) {
                    checkFolder(fullPath);
                }
            });
        }
    }

    checkFolder(rootDir);

    return emptyFolders;
}

const nodeModulesPath = path.join(__dirname, 'node_modules');
const emptyFolders = checkEmptyFolders(nodeModulesPath);

if (emptyFolders.length > 0) {
    console.log('Empty folders in node_modules:');
    emptyFolders.forEach((folder) => {
        console.log(folder);
    });
} else {
    console.log('No empty folders in node_modules.');
}
