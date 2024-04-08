function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else return result;
}
// const number1 = '3';   // this code give me error
let  number1 : number;
number1 = 1;
const number2 = 2.8;
const printResult = true;
let resultphrase = "Result is : ";  // automatically defined type string and it can not be change
// resultphrase = 0;   // this give me a error

add(number1, number2, printResult, resultphrase);

