//task 1 (fizzbuzz)
for(let k=1; k<= 100; k++)
{
    if(k % 3 ==0 && k % 5 ==0){
        console.log("fizzbuzz");
    }
    else if(k % 3 ==0){
        console.log("fizz");
    }
    else if(k % 5==0){
        console.log("buzz");
    }
    else
    {
        console.log(k);
    }
}

//task 2(duplicates)

function removeDuplicate(arr){
    return new Set(arr);
}

var k=[1,1,2,2,3,4,5,5,6,7,8]
var j=removeDuplicate(k)
console.log(j)

//task 3(count the occurance)

function charactercount(str){
    const strings={};

    for (let char of str){
        if(strings[char]){
            strings[char]+=1;
        }
        else{
            strings[char]=1;
        }  
    }
    return strings;
}
let string="the welcome to web develop"
let result=charactercount(string);
console.log(result);

