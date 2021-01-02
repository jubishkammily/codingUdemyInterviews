// Merge Sorted Arrays  Example

function mergeSortedArrays(array1,array2){

    if(array1.length == 0)
    return array2;

    
    if(array2.length == 0)
    return array1;

    const mergedSortedArray = [];
    let  array1Item = array1[0];
    let  array2Item = array2[0];

    let i = 1;
    let j = 1;


    /// if both are undefined that while loop stops 
    while(array1Item || array2Item){

        console.log(array1Item,array2Item);

  
        // to avoid if arryay2item is undefined and the loops goes to infinite loop
        // udefined < integer positive number example undefined < 6 is false so it will go to the else loops and in the end makes 
        //the array2item also undefined which stops the loop
        if(!array2Item || array1Item < array2Item){
            mergedSortedArray.push(array1Item);
            array1Item = array1[i];
            i++;
            
        }else{
            mergedSortedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
        
    }

    return mergedSortedArray;

}



 let array1_t   = [0,3,4,31];
 let array2_t   = [4,6,30,29];


 // this will onlz work for sorted arrazs
 mergesorarray = mergeSortedArrays(array1_t,array2_t);




console.log("mergesorarray",mergesorarray);
