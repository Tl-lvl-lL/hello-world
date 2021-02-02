const fs = require('fs'),
        path = require('path')

let locationDir = path.join(__dirname+'/Dir')

//fs.mkdirSync(locationDir)

/**
 * throw err if dir already exist
 * 
 */

r=fs.readdirSync(locationDir,'utf-8')
fs.appendFileSync(locationDir+'/path.txt','c')
console.log(r);