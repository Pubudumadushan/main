//Function for fill data in to the table

const fillDataIntoTable = (tableID,dataList,propertyList,deleteFunction,reFillFunction,printFunction)=>{

    //Variable for store table body
    const tableBody = tableID.children[1];
    tableBody.innerHTML ="";


    //Get data list one by one
    dataList.forEach((item,index) => {

        const tr = document.createElement('tr');

        const empId = document.createElement('td');
        empId.innerText = parseInt(index)+1;
        tr.appendChild(empId);


    for(const itemOb of propertyList ){

        const td = document.createElement('td');


        if(itemOb.datatype == 'string'){

            td.innerText = dataList[index][itemOb.property];

         }
        
        if(itemOb.datatype == 'function'){

           td.innerHTML = itemOb.property(dataList[index]);

        }

        tr.appendChild(td);
        
        }

    const tblButton = document.createElement('td');
    
    const inputRadio = document.createElement('input');
    inputRadio.className = 'form-check-input';
    inputRadio.type = 'radio';
    inputRadio.name = 'modify';

    tblButton.appendChild(inputRadio);

    inputRadio.onchange = function(){

        reFillFunction(item,index)

        window['editOb'] = item;
        window['editRow'] = index;

        divModify.className = 'd-block';
        

    }

    
    tr.appendChild(tblButton);

    tableBody.appendChild(tr);

        

        
    });
}


//fill data into 