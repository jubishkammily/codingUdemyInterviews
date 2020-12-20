
const nemo = ['nemo'];
console.log("hi");

var array = [1,2,3,9];
var array2 = [1,2,4,4];
var sum = 8;

var isFound = findPairAsSum(array2,sum);
console.log(isFound);

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