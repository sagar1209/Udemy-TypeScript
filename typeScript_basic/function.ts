function add(n1: number, n2: number) {
    return n1 + n2;
  }
  
  function printResult(num: number): void {
    console.log("Result is" + num);
  }
  
  function addAndHandle(n1:number,n2:number,cb:(a:number)=>void){
      const result = n1+n2;
      cb(result)
  }
  
  printResult(add(5, 12));
  
  // let combineValues : Function;
  let combineValues : (a:number , b:number) => number;
  
  
  combineValues = add;
  // combineValues = printResult;
  
  console.log(combineValues(2,3));
  
  
  addAndHandle(2,3,(Result)=>{
      console.log(Result)
  })
  
  
  