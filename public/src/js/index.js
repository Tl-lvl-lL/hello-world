
console.clear()

const   commonErrors= ['!','"','#','$','%','&','&','/','(',')','=','?','¡'],
        errorsPlusSpace = ['!','"','#','$','%','&','&','/','(',')','=','?','¡',' '],
        myText = 'Location = 12$ %%43 ))=? qs -|-'

// Delete parameters no requires

/**
 * Direction= l or left || r or rigth
 * 
 * num = < phrase.length
 * 
 * phrase = typeof number or string
 *
 * Only we need:
 *  typeof :    
 *      Phrase 'String'
 *      Number Indicator 'number'
 *      Direction 'Rigth or letf' // Two option in DOM
 *  In html no depends of input, because ever return text or 'string'
 *  We're can to convert PHRASE in array
 *  phrase= Array.from(phrase)
 */

let foundValue = (arr,element) =>{
    /**
     * Veriified element in arr 
     */
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if(e === element){
            return true
        }
    }
}

let compareSets=(arr1,arr2)=>{
    /**
     * Arr1 = text to reset
     * 
     * Arr2 = parameters keep out text
     */
    let arrclean = []
    
    for (let i = 0; i < arr1.length; i++) {
        const e = arr1[i];
        if(foundValue(arr2,e)){
            continue
        }else{
            arrclean.push(e)
        }
    }

    return arrclean
}

let countText = (phrase,arr)=>{
    return compareSets(phrase,arr).length
}

let converToText = (phrase) =>{

    /**
     * Join again:
     *       arr  = arr.join('')
     *       text = text.concat(arr[i])
     */

    let text = ""

    for (let i = 0; i < phrase.length; i++) {
        const e = phrase[i];
        text = text.concat(e)

    }
    return text
}

let cutTextLeft = (phrase,num) =>{

    //Cut from 0 .Then it's missing one

    /**
     * Steps for cut text:
     * -------------------
     * 
     * Phrase = string
     * we're can to convert arr // OPCIONAL
     * 
     * 
     * 
     * Join again:
     *       arr  = arr.join('')
     *       text = text.concat(arr[i])
     * 
     */

    let cropp = []

        
    for (const i in phrase) {
        if (cropp.length <= num){
            cropp.push(phrase[i])
        }
    }
        
    return converToText(cropp)
}

let cutTextRigth = (phrase,num) =>{

    //exact

    /**
     * Steps for cut text:
     * -------------------
     * 
     * Phrase = string
     * we're can to convert arr // OPCIONAL
     * 
     * 
     * 
     * Join again:
     *       arr  = arr.join('')
     *       text = text.concat(arr[i])
     * 
     */

    let cropp = []

    /*  
        if ( phrase.length <= num){
            cropp.push(phrase[i])
        } 
    */

    for (const i in phrase) {
        if (i >= num){
            cropp.push(phrase[i])
        }
    }

    cropp = cropp.join('')
    return cropp
}


let  reverseText = (phrase) =>{

    /**
     * arr.reverse() 
     */

    arr = Array.from(phrase)

    let rt = []
    
    for (let i = (arr.length -1); i > -1; i--) {
        const e = arr[i];
        rt.push(e)
    }

    return rt
}