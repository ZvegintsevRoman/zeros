module.exports = function zeros(expression) {
  let oneStepFactorial = [];
  let twoStepFactorial = [];
  let fives = 0;

  expression.split('*').map(str => str.endsWith('!!') ? twoStepFactorial.push(str.slice(0, -2)) : oneStepFactorial.push(str.slice(0, -1)));
  
  if (twoStepFactorial.every(item => item % 2 != 0) && !oneStepFactorial.length) twoStepFactorial = [];

  function countZeros(num, step) {     
    for (num; num > 0; num -= step) {
      let current = num;
      while (current > 0) {
        if (current % 5 === 0) fives++; 
      current /= 5;
      }   
    }     
  }  

  oneStepFactorial.forEach(num => countZeros(num, 1));
  twoStepFactorial.forEach(num => countZeros(num, 2));
  
  return fives;
}
