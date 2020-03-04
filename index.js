// addition of two values
function add(a,b){
  return a+b;
}
//output : 6
const sum=add(2,4);
console.log(sum);

// subtraction of two values
function sub(a,b){
  return a-b;
}
// output : 5
const minus=sub(10,5);
console.log(minus);

// multiplication of two values
function mul(a,b){
  return a*b;
}
// output : 50
const product=mul(10,5);
console.log(product);

//division of two numbers
function div(a,b){
  return a/b;
}
// output : 0.5
const divide=div(12,24);
console.log(divide);

//modulo of two numbers
function mod(a,b){
  return a%b;
}
// output : 12
const rem=mod(12,24);
console.log(rem);

//power of a number
function pow(a,b){
  return a**b;
}
// output : 8
const power=pow(2,3);
console.log(power);

//compare two strings
function str(a,b){   
  return a===b;
}
//output : Strings are equal
 var a="janu";
 var b="janu";
if(typeof(a)==typeof(b))
{
   const key=str(a,b);
if(key===true)
console.log("Strings are equal");
else
console.log("Strings are not equal");
 } 
else 
console.log("Strings are of different type");

//compare two numbers
function num(a,b){   

  return a===b;
}
//output : Strings are not equal
 var a=345;
 var b=566;
if(typeof(a)==typeof(b))
{
   const key=num(a,b);
if(key==true)
console.log("numbers are equal");
else
console.log("numbers are not equal");
 } 
else 
console.log("values are of different type");

//compare values
function val(a,b){   
  a===b?x=0:x=1;
  return x;
}
//output : Strings are not equal
 var a="345";
 var b=345;
const key=val(a,b);
if(key===0)
console.log("values are equal");
else
console.log("values are not equal");

//----------------------------------------------------
//GradeFinder
function myGrading(score) {
  var gscore;
  switch(true) {
    case (score <= 100 && score >= 90):
       gscore = 'A';
        break;
    case (score <= 89 && score >= 80):
        gscore = 'B';
         break;
    case (score <= 79 && score >= 60):
        gscore = 'C';
         break;
    case (score <= 59 && score >= 0):
        gscore = 'D';
        break;
    case (score > 100 && score < 0):
        gscore = 'INVALID SCORE';
        break; 

    default:
      return 'INVALID SCORE';
  }
  return gscore;
}
//output : B
  const grade =myGrading(87);
  console.log(grade);

//Check Vowels
function isVowel(x) {  
  return /[aeiouAEIOU]/.test(x); 
  }
 //output : true 
const word=isVowel("janu");
console.log(word);

//Find Prime number
function prime(a) {              
var i,flag=1;
for(i = 2; i <= a - 1; i++) 
    if (a % i == 0) { 
        flag = 0; 
        break; 
    } 
    return flag;
}
//output : Not a prime
const key=prime(4);
if(key==0)
console.log("Not a prime");
else
console.log("Prime");

