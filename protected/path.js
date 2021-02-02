console.clear()
const   path = require('path'),
        location =  __dirname,
        locationFile = __filename;

/*
    root <string>
    dir <string>
    base <string>
    name <string>
    ext <string>
 */

let formatLocation = path.format({
    
    dir: '/home/user/dir',
    
    base: 'file.txt',

    root: '/',
});



console.log(formatLocation);
console.log(path.parse(locationFile))
console.log(location)