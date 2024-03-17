//Create function for validate text element 
const textValidator = (feildId,pattern,object,property)=>{

    //create variables for assign regexp object
    const regPattern = new RegExp(pattern);

    if(feildId != ""){

        //if value exist
        if(regPattern.test(feildId.value)){

            //if value valid
            window[object][property] = feildId.value;

            feildId.style.border = "2px solid green";

        }else{

            //if value invalid
            window[object][property] = null;

            feildId.style.border = "2px solid red";


        }

    }else{

        
    }



}

// Create function for validate select element
const selectValidation2 =(feildId,pattern,object,property)=>{

    

        //if value exist
        if(feildId.value){

            //if value valid
            

            feildId.style.border = "2px solid green";
            window[object][property] = JSON.parse(feildId.value);//select element type is string need to convert as js object

        }else{

            //if value invalid
            

            feildId.style.border = "2px solid red";
            window[object][property] = null;


        }

    }





