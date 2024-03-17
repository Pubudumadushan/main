
// Create text field validation function 

const textFieldValidation = (textFieldId,pattern,object,property)=>{

    const textFieldValue = textFieldId.value;

    const regPattern = new RegExp(pattern);

    if(textFieldValue!==""){

        if(regPattern.test(textFieldValue)){


           //if value valid 
           window[object][property] = feildId.value;
            textFieldId.style.border = '2px solid green';

        }else{

            textFieldId.style.border = '2px solid red';

        }

    }else{

        if(textFieldId.required){

            textFieldId.style.border = '2px solid red';

        }else{

            textFieldId.style.border = '1px solid #dee2e6';
        }


    }
}

//create select element validation function

const selectValidation = (feildId,pattern)=>{

    if(feildId.value !==''){

        //valid
        feildId.style.border = '2px solid green';
    }else{

        //invalid
        feildId.style.border ='2px solid red'; ;
    }
}








