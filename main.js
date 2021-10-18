const fs = require('fs')
const env = require('../oav.01/php.env')

const variableReg = /[a-zA-Z_]+=.+/gm
fs.readFile('../oav.01/php.ini', 'utf8' , (err, data) => {
    if(err){
        console.log(err);
        return
    }

    console.log(data);
})



