/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    // const newArr = [];
    // for(i = 0; i<arr.length; i++){
    //     let value = arr[i] * 2
    //     newArr.push(value);
    // }
    // return newArr;

    const mapping = arr.map(function(v){
        return v*2
    })
    return mapping; 
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    // const newArr2 = [];
    // for(i = 0; i<arr.length; i++){
    //     let value = arr[i];
    //     if (Number(value) % 2 === 0){
    //         newArr2.push(value);
    //     }
    // }
    // return newArr2; 
    const fl = arr.filter(function(v){
        if(v%2===0){
            return v
        }
    })
    return fl; 
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    const newArr3 = [];
    let firstLetter = '';
    let lastLetter = '';
    let lV;
    let value;
    for (word of arr){
        lV = word.length - 1; 
        firstLetter = word[0];
        lastLetter =word[lV];
        value = `${firstLetter}${lastLetter}`
        newArr3.push(value);
    }
    return newArr3;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    const newArr4 =[];
    for(let obj of arr){
        obj[key] = value;
        let newObj = obj; 
        newArr4.push(newObj);
    }
    return newArr4;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    let string = str.toLowerCase(); 
    let vowels = 'aeiou';
    const obj = {};
    for(i=0; i<string.length; i++){
        let letter = string[i]; 
        if (!vowels.includes(letter)){
            continue;
        }
        else if (obj.hasOwnProperty(letter)){
            let newValue = obj[letter] + 1;
            obj[letter] = newValue;
        } 
        else {
            obj[letter]=1;
        }
    } 
    return obj; 
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    const mapedArr = arr.map(function(num){
       return num*2; 
    })
    return mapedArr;
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    // const newArr5 = []
    // let newValue; 
    // for(i=0; i<arr.length; i++){
    //     newValue = i*arr[i];
    //     newArr5.push(newValue);
    // }
    // return newArr5;

    const mappedArr2 = arr.map(function(value,i){
        return value * i;
    })
    return mappedArr2;
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    // const newArr6 = []; 
    // for(let obj of arr){
    //     let value;
    //     value = obj[key];
    //     arr6.push(value);
    // }
    // return newArr6;

   const mappedArr3 = arr.map(function(value){return value[key]});
   return mappedArr3; 
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    // const newArr7 = []; 
    // for(let obj of arr){
    //     let first;
    //     let last; 
    //     let fullName;
    //     first = obj['first']; 
    //     last = obj['last'];
    //     fullName = `${first} ${last}`; 
    //     console.log(fullName);
    //     newArr7.push(fullName); 
    // }
    // return newArr7
    const mappedArr4 = arr.map(function(v){
        return  v['first']+' '+v['last']
        
    })
    return mappedArr4;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    // const newArr8 = [];
    // for( let obj of arr){
    //     if (obj[key]){
    //         newArr8.push(obj); 
    //     }
    // }
    // return newArr8;
    const filteredArr = arr.filter(function(v){
        return v[key];
    })
    return filteredArr;
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    const filteredArr2 = arr.filter(function(v){
        if(v === searchValue) {
            return v;
        }
    })
    return filteredArr2[0];
    
    }
    // let found = undefined
    // for(let value of arr){
    //     if(value === searchValue){
    //         found = value;
    //         return found;
    //     }   
    // }
    // return found;

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    const filteredArr3 = arr.filter(function(v){
        if(v[key]===searchValue){
        return v }
    })
    return filteredArr3[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let word = str.toLowerCase(); 
    let vowels = 'aeiou'
    let result = ''

    for(let letter of word){
        if(!vowels.includes(letter)){
            result += letter
        }
    }
    return result
   
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
   const filteredArr4 =  arr.filter(function(v){
    if(v%2 === 1){
        return v;
        }
    })
   const multBy2 = filteredArr4.map(function(v){
    return v*2;
   })
   return multBy2;
}
