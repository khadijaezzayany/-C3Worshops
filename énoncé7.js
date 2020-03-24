function rangeOfNumbers(startNum, endNum){
    if(startNum - endNum === 0){
        return[startNum];
    }
        else if (startNum < endNum){
            var num = rangeOfNumbers(startNum, endNum-1);
            num.push(endNum);
            return num;
        }
  
}
console.log(rangeOfNumbers(2, 2));