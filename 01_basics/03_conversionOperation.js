let score = "33abc"

console.log( typeof score);
console.log( typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN (not a number)
// "33"=> 33
//"33abc"=> NaN
// true => 1 ; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
//"" => false
// "hitesh"=> true


let someNumber = 33

let StringNumber = String(someNumber)
console.log(StringNumber)
console.log(typeof StringNumber)


//******************************Operation********************************** */

let value =  3
let negValue = - value
console.log( negValue)


let str1 = " hello"
let str2 = "hitesh"
let str3 = str1 + str2
console.log(str3)


console.log (" 1 " +  2 )
console.log ( 1 + "2" )
console.log ( "1" + 2 + 2 )
console.log ( 1 + 2 + "2")

console.log ( 1 +2 +3)


console.log (+true)// + conversion true ka conversion 1
console.log (+"")// null conversion 0



let gamecounter =100
gamecounter++
console.log( gamecounter);