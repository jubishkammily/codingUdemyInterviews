/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    let indices = [];
    if (nums.length > 0) {

        let differenceHashTable = {};
        let tagetDiff = 0;

        for (var i = 0; i < nums.length; i++) {
           
            console.log(differenceHashTable);
            //console.log(differenceHashTable[nums[i]]);
            if (differenceHashTable[nums[i]] != undefined) {
                if (differenceHashTable[nums[i]] != i) {
                    console.log("differenceHashTable[nums[i]]", differenceHashTable[nums[i]]);
                    indices.push(differenceHashTable[nums[i]]);
                    indices.push(i);
                    break;
                }
            }

            
            tagetDiff = target - nums[i]; 
            
            tagetDiff = tagetDiff                          
            differenceHashTable[tagetDiff] = i;


        }




    } else {
        return [];
    }
    return indices

};

//[2,7,11,15] , 9
//[3,3] , 6
//[-1,-2,-3,-4,-5] -8
//[-10,7,19,15] 9

//console.log(twoSum([2,7,11,15], 9));
//console.log(twoSum([3,3], 6));
console.log(twoSum([-1,-2,-3,-4,-5], -8));
//console.log(twoSum([-10,7,19,15], 9));
//console.log(9- -10);


//Math.abs(-7.25)