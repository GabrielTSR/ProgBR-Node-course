const fs = require('fs');

const args = process.argv.slice(2);

const fileName = args[0];

fs.readFile(fileName, 'UTF-8', (err, data) => {
    if (err) throw error;

    fs.writeFile(fileName + '_Uppercase', data.toUpperCase(), (err) => {
        if (err) throw err;
        console.log('arquivo gerado com sucesso');
    });
});
