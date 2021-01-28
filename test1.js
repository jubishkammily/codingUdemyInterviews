


inputJsonObject = {
    prop1:"prop1value",
    prop2:"prop2value",
    prop3:{
      prop3Child1:"prop3Child1val",
      prop3Child2:"prop3Child2val",
      prop3Child3:{
          prop3child_child1:"prop4child_child1val",
          prop3child_child2:"prop4child_child2val",
          prop3child_child3:"prop4child_child3",
      }
    },
    prop4:{
        prop4Child1:"prop3Child1val",
        prop4Child2:"prop3Child2val",
        prop4Child2:{
            prop4child_child1:"prop4child_child1val",
            prop4child_child2:"prop4child_child2val",
            prop4child_child3:"prop4child_child3",
        }
      },
    prop5:[{
        prop5Child1:"prop5Child1val",
        prop5Child2:"prop5Child2val",
    }],
    prop6:[{
        prop6Child1:[1,2,3,4,5,6,7,8,9,10,11]        
    }],
    prop7:[{
        prop7Child1:"prop7Child1val",
        prop7Child2:"prop7Child2val",
    }],
}




function searchJsonRecur(property,inputJsonObject){

    var property_value;
    for(var prop in inputJsonObject){
        console.log("prop : ",prop);
         console.log("Type prop : ",typeof prop);       
        if(prop == property){            
            property_value = property;
            console.log("Found : ",property_value)
            break;
        }

        if(typeof inputJsonObject[prop] == "object"){
            if(!Array.isArray(inputJsonObject[prop])){
                property_value = searchJsonRecur(property,inputJsonObject[prop]);
               if(property_value!=null){
                // console.log("property_value : ",property_value);
                break;
               }
               
            }else{

                var newArray = inputJsonObject[prop];
                if(newArray.length >0){
                    var insidProperty = newArray[0];
                    if(typeof insidProperty == "object"){
                        property_value = searchJsonRecur(property,inputJsonObject[prop]);
                    }

                }


            }
        }
    }
    return property_value;
}

// var property = "prop4child_child1";
var property = "prop10Child1";
var val = searchJsonRecur(property,inputJsonObject)
console.log(val);