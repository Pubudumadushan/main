//Create function for fill data into select element

const fillDataintoSelect = (feildId,message,dataList,property)=>{

    feildId.innerHTML = '';

    const optionMsg = document.createElement('option');
    optionMsg.innerText = message;
    optionMsg.selected = 'selected';
    optionMsg.disabled = 'disabled';
    feildId.appendChild(optionMsg);

    dataList.forEach(element => {

        const option = document.createElement('option');
        option.innerText = element[property];
        option.value = JSON.stringify(element);//joson string object ekak create karaganna
        feildId.appendChild(option);
        
    });
}