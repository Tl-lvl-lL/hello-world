let fs = require('fs')
//Var
let finalOut=`===============\nTABLE OF 5\n=================\n`



/**
 * fs.writeFile(path,content,callback) 
 */
fs.writeFileSync('nameFile.txt',finalOut)


//Read
/**
 * fs.readFile(path,callback)
 */
let lecture = fs.readFileSync('nameFile.txt','utf8')
console.log(lecture);

//Rename
/**
 * fs.rename(oldPath, newPath, callback)
 */

fs.renameSync('nameFile.txt','nameFile2.txt')


//Delete
/**
 * fs.unlink(path, callback)
 */

fs.unlinkSync('nameFile2.txt')