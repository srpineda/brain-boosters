const organizer = (arr => {
    //segregate numbers from strings
    let arrayForStrings = [];
    let arrayForNumbers = [];
    for (item of arr) {
        if (typeof(item) === "string"){
            arrayForStrings.push(item);
        }
        else {
            arrayForNumbers.push(item);
        }
    }
    const compartmentalize = (array => {
        //arrange in ascending order
        array.sort((a,b) => a-b);
        //compartmentalize
        let newArr = [];
        while (array.length>0){
            for (let i=0; i<array.length; i++) {
                if (array[i] !== array[i+1]) {
                    //kapag mag-isa lang, no need to put in an array
                    if (i===0) {
                        newArr.push(array[i]);
                        array.splice(0,i+1);
                        break;
                    }
                    //put in an array pag magkakapareho
                    else {
                        newArr.push([]);
                        for (let j=0; j<i+1; j++) {
                            newArr[newArr.length-1].push(array[i]);
                        }
                        array.splice(0,i+1);
                        break;
                    }
                }
            }
        }
        return newArr;
    });
    let answer = [];
    if (arrayForStrings.length === 0){
        answer = compartmentalize(arrayForNumbers);
    }
    else if (arrayForNumbers.length === 0){
        answer = compartmentalize(arrayForStrings);
    }
    else {
        const array1 = compartmentalize(arrayForStrings);
        const array2 = compartmentalize(arrayForNumbers);
        answer = [array1, array2];
    }
    return answer;
} ); 