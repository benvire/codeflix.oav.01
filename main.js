const { listenerCount } = require('events');
const fs = require('fs')
const arg = process.argv[2]
const variableReg = /[a-zA-Z_]+=.+/gm
let file = `../oav.01/${arg}.JSON`


fs.readFile(arg, 'utf8' , (err, data) => {
    if(err){
        console.log(err);
        return
    }


    const converted = {}
    while(null != (x = variableReg.exec(data))){
        // console.log(x[0]);
        xSplit = x[0].split('=')
        
        converted[xSplit[0]] = xSplit[1].replace(/\"/g, "")


    };

        fs.writeFileSync(`${arg}.JSON`, JSON.stringify(converted, null, 2));
});