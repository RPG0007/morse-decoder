const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '' :  ' '
};
function decode(expr) {
    let dec1 = []
    let str1 = expr
    for(let f=0;f<expr.length;f=f+10){
        dec1.push(str1.substring(0,10))
        str1 = str1.slice(10)
      
    }  
    str2=""
   for (let i = 0;i<dec1.length;i++)
   {
       dec1[i]=dec1[i].replaceAll('10','.')
       dec1[i]=dec1[i].replaceAll('11','-')
       dec1[i]=dec1[i].replaceAll('0',' ')
       dec1[i]=dec1[i].replace(/\s/g, '')
       dec1[i]=dec1[i].replaceAll('*',' ')
        str2=str2+dec1[i]+' '
   }
   str2=str2.replaceAll('          ','')
    outPut = "";

    for (var i = 0; i < str2.split(" ").length; i++) {
        if(str2.split(" ")[i]==" "){
          outPut+=" "
        }
        else{
     outPut += MORSE_TABLE[str2.split(" ")[i]];}
        
    }
    return outPut.substring(0,outPut.length-1);
}
module.exports = {
    decode
}