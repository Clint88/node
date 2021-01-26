const fs = require('fs');

// let jsonString = '{"name": "Clint"}';

let jsonString = {"name": "Cint"};

fs.writeFile('data2.json', JSON.stringify(jsonString), function(err) {
    if(err){
        console.log(err)
    }
})