document.getElementById('btn-withdrawal').addEventListener('click',function(){
    const inputWithdrawalValue = getBoxValue('withdrawal-amount')
    

    const fieldWithdrawalText = getFieldTextValue('total-withdrawal');

    const balanceField = getFieldTextValue('total-balance');
    

    if(isNaN(inputWithdrawalValue)){
        alert ("Enter a digit.");
        return;
    }

    else if(inputWithdrawalValue > balanceField){
        alert ('Donot have sufficient balance to withdraw.Please,check your balance.');
        return;
    }

    const totalWithdrawal = inputWithdrawalValue + fieldWithdrawalText;

    setValueText('total-withdrawal', totalWithdrawal);

    

    const totalBalance = balanceField - inputWithdrawalValue ;

    setValueText('total-balance', totalBalance);
    
})