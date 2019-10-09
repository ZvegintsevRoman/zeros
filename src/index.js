module.exports = function zeros(expression) {
  let oneStepFactorial = [];
  let twoStepFactorial = [];
  let fives = 0;
  let twos = 0;

  expression.split('*').map(str => str.endsWith('!!') ? twoStepFactorial.push(str.slice(0, -2)) : oneStepFactorial.push(str.slice(0, -1)));
  
  function countZeros(num, step) {     
    for (num; num > 0; num -= step) {      
      if (num % 25 === 0) fives++;
      if (num % 5 === 0) fives++;      
      if (num % 2 === 0) twos++; 
    }     
  }  

  oneStepFactorial.forEach(num => countZeros(num, 1));
  twoStepFactorial.forEach(num => countZeros(num, 2));
  
  return Math.min(twos,fives);
}
