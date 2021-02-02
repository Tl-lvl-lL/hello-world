
console.clear()
//A program to count lenght of characters by input
/**
 * lenght(input)
 */
class person{
    constructor(n,l){
        this.name=n;
        this.lastName=l;
    }
    
    get Name(){
        return this.name
    }
    
}
let countParameters = (arg,...args) =>{
    let parameterkeepout = ['#','$','%','&','/','(',')','=',''],
        type = typeof arg,
        count = []

    arg =String(arg)

    for (let i = 0; i < arg.length; i++) {
        const e = arg[i];
        if (e !== ' '){
            count.push(arg)
        }
    }


    console.log(`
        Argument: ${arg}\n
        Argument Type :\n
            >>  ${type}\n
        Legth Argument:\n
            >>  ${arg.length}
        Legth Argument without space:\n
            >>  ${count.length}
    `);
}
let Bartola = new person ('Flaco','Benites')
/* countParameters(Bartola.Name) */

let cutString = (pharse,length) => {
    try {
    if(typeof pharse && typeof length === 'undefined'){
        /* console.log(pharse,length) */
        throw new Error('My error')
    }
    } catch (e) {
        console.log(e.message);
    }
}

/* cutString() */

let cutText = (phras,nu,directio)=>{
        
    let phrase='text forward',
        num=3,
        direction='left',
        phraseWithoutSpace=[]

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
     * 
     */
    //In html no depends of input, because ever return text or 'string'
    //We're can to convert PHRASE in array
    /* phrase= Array.from(phrase) */


    
    for (let i = 0; i < phrase.length; i++) {
        const e = phrase[i];
        if (e !== ' ') {
            phraseWithoutSpace.push(e) 
        }               
    }
    console.log(phraseWithoutSpace);
/*     countParameters(phrase) */
}

// Delete parameters no requires

const cleanPhrase = (phrase) =>{
    /**
     * phrase could be string
     */
    let parameterkeepout = ['#','$','%','&','/','(',')','=',' ','!','¿','¡',',','"'],
        cleanPhrase = [],
        dirty = [],
        booleanValue= false

        for (let i = 0; i < phrase.length; i++) {
            const e = phrase[i];
            for (let i = 0; i < parameterkeepout.length; i++) {
                const x = parameterkeepout[i]
                if(e === x){
                    dirty.push(e)
                    booleanValue = true
                    break
                }else if(e !== x){
                    booleanValue = false
                    break
                }
            }
            if (booleanValue === false){
                console.log(e,booleanValue);
                cleanPhrase.push(e)
        }

        
    }
    console.log(cleanPhrase);
    console.log(dirty);
}
/* cleanPhrase('1 ,2 4%#$"!"') */
/* let str = '1 ,2 4%#$"!"'
str =Array.from(str) 
console.log(str);
 */



/* let parameterkeepout = ['#','$','%','&','/','(',')','=',' ','!','¿','¡',',','"'],
    cleanPhrasea='1 ,2 4%#$"!"' 

foundValue(parameterkeepout,cleanPhrasea) */

let foundValue = (arr,element) =>{
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if(e === element){
            return true
        }
    }
}

let x=(arr1,arr2)=>{
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
/* let p = ['#','$','%','&','/','(',')','=',' ','!','¿','¡',',','"'],
        c ='tu no sabesque /%$$%'

console.log(x(c,p)); */