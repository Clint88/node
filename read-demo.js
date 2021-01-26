const fs = require('fs');

fs.readFile('./data1.json', function(err, data) {
    console.log(data);
    data = JSON.parse(data);
    console.log(data.name);
})