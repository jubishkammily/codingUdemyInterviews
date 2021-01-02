var array1 = {
    "speed toque":"torque",
    "Speed":"torque1"
}


function getKeyValue(object,value){
    return Object.keys(object).find(key => object[key] == value);
}

console.log(array1["torque"]);

var abc = getKeyValue(array1,"torque");

console.log("abc",abc);

