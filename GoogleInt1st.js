var array = [1,2,3,9];
var array2 = [1,2,4,4];
var sum = 8;

//var isFound = findPairAsSum(array2,sum);
//var isFound = pairWay(array2,sum);
// var pariObject = searchPairWOShift(array2,sum);
// console.log(pariObject.isFound);
// if(pariObject.isFound){
//     console.log(pariObject.pair);
// }

console.log(searchObject(array2,sum));



/// THE MOST TIME CONSUMING SOLITION QUADRATIC

function findPairAsSum(arrayValues,sum){

isFound = false;
    for(var i =0; i <arrayValues.length;i++){
        for(var j=0; j<arrayValues.length;j++){
            if(i != j){
                var fSum = arrayValues[i] + arrayValues[j];
                if(fSum == sum){
                    isFound = true;
                    break;
                    
                }
            }
            
        }
        if(isFound){
            break;
        }
    }

    return isFound;

}



// if arrays is not sorted use a hashtable in javascript Object we can say
function searchObject(arrayValues,sum){

    // create a hastable similar to look up for value
    // each time the  will check inside object arrayValuesHash compared against value in arrValues if there is a match means it has found the complement
    // a complement means a value which makes fullfill or complete the requirement here 
    // complements are added t0o arrayValuesHash

    var arrayValuesHash = {};

    for(var i of arrayValues){
        arrayValuesHash[i] = sum-i;   
        //console.log(i);   
        if(arrayValuesHash[i] == i)
        return true;


}

console.log(arrayValuesHash);

return false;

}




// best solution googles without shifting array // only works if array are sorted
function searchPairWOShift(arrayValues,sum){

    // here we just change the position of the first and last pair based on the sum we are getting
    // if sum is higer that the calculated the last position should be reduced by one 
    // if sum less then firsttrack post increased by one
    // this works if the array is sorted

    var postLower = 0;
    var postHiger = arrayValues.length-1;
    isFound = false;
    var pariObject = {
        isFound:false,
        pair:[]
    }

    pariObject.isFound = false;
    pariObject.pair = [];


    while(postLower < postHiger){
        
        var fSum = arrayValues[postLower] + arrayValues[postHiger];
        //console.log("postLower",postLower);
        //console.log("postHiger",postHiger);
        if(fSum > sum){

            postHiger--;

        }else if(fSum < sum){

            postLower++;

        }else{
            pariObject.isFound = true;
            pariObject.pair.push(arrayValues[postLower]);
            pariObject.pair.push(arrayValues[postHiger]);
            break;           

        }

    }

    return pariObject;
}


