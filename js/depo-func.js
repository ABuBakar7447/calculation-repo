document.getElementById('btn-deposit').addEventListener('click',function(){
    const inputDepositValue = getBoxValue('deposit-amount')
    

    const fieldDepositText = getFieldTextValue('total-deposit');
    

    if(isNaN(inputDepositValue)){
        alert ("Enter a digit.");
        return;
    }

    const totalDeposit = inputDepositValue + fieldDepositText;

    setValueText('total-deposit', totalDeposit);

    const balanceFIeld = getFieldTextValue('total-balance')

    const totalBalance = inputDepositValue + balanceFIeld;

    setValueText('total-balance', totalBalance);
    
})