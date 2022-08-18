function getBoxValue(inputString){
    const boxValue = document.getElementById(inputString);
    const boxValueString = boxValue.value;
    const boxValueNumber = parseFloat(boxValueString);
    boxValue.value = '';
    
    return boxValueNumber;
}

function getFieldTextValue(inputFieldString){

    const fieldText = document.getElementById(inputFieldString);
    const fieldValueString = fieldText.innerText;
    const fieldTextNumber = parseFloat(fieldValueString);
    return fieldTextNumber;

}

function setValueText(giveValue, setValue){
    const setFieldValue =document.getElementById(giveValue);
    setFieldValue.innerText = setValue;
}