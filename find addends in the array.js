//Question 2: Write a javascript function that takes an array of numbers
//and a target number. The function should find two different numbers 
//in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4)should return [1,3]

const findAddends = ((array, target)=>{
    //filter elements <= target
    const filteredArray = array.filter(element => element <= target);
    
    for (element of filteredArray) {
        if (filteredArray.includes(target-element) && (target-element !== element)){
            return [element, target-element]
        }
    }
    return "no different addends in array for target number";
});