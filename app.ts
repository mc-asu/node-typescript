const num1 = document.getElementById('num1') as HTMLInputElement
const num2 = document.getElementById('num2') as HTMLInputElement
const buttonE = document.querySelector('button')! as HTMLButtonElement

const numResults: number[] = []
const textResults: string[]  = []
// ! ignores a nullable value line 3
type NumOrString = number | string
type Result = { val: number; timestamp: Date; }

interface ResultObj { 
  val: number
  timestamp: Date
}

function add(num1:number | string , num2: number | string) {
  if(typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else if(typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + num2;
  } else {
    // mixed types
    return +num1 + +num2;
  }
}

// Defining an object type
function printResult( resultObj: Result ) {
  console.log(resultObj.val)
}
buttonE.addEventListener('click', () => {
  const num1e = num1.value
  const num2e = num2.value
  const result = add(+num1e, +num2e)
  // result and stringResult are Union Types so we specify the results
  numResults.push(result as number)
  const stringResult = add(num1e, num2e)
  textResults.push(stringResult as string)
  console.log(numResults, textResults)
  printResult({ val: result as number, timestamp: new Date()})
})

const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('It worked')
  }, 1000);
})
mypromise.then(result => {
  console.log(result)
})
// console.log(add(1, 6));

// console.log(add(+'1', +'6'));
 