function sumCongruentModulo(inputArray, divisor, remainder) {
    for(i = 0; i < inputArray.length; i++) 
    for(j = 0; j < inputArray.length; j++)
    
    if(i!=j && inputArray[i] % divisor == remainder && inputArray[j] % divisor == remainder){
        return inputArray[i] + inputArray[j];
    }
};
console.log(sumCongruentModulo([1,2,3,6], 3, 0)); //output should be 9
console.log(sumCongruentModulo([7,8,9,10], 2, 0)); //output should be 18
console.log(sumCongruentModulo([7,8,9,10], 3, 1)); //output should be 17
console.log(sumCongruentModulo([7,8,9,10], 2, 1)); //output should be 16


