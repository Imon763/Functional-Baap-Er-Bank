document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositTotalString);
    const previousDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = previousDepositTotal; 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceTotalString);
    const balanceTotalAmount = balanceAmount + newDepositAmount;
    balanceTotal.innerText = balanceTotalAmount; 
})
document.getElementById('btn-wtihdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawTotalString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawTotalString);
    withdrawField.value = '';
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const peviousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousDepositTotal = parseFloat(peviousWithdrawTotalString);
    const newWithdrawAmount = previousDepositTotal + withdrawAmount;
    withdrawTotalElement.innerText = newWithdrawAmount;
    const withdrawBlanceTotal = document.getElementById('balance-total');
    const withdrawBlanceTotalString = withdrawBlanceTotal.innerText;
    const  withdrawBlanceAmount = parseFloat(withdrawBlanceTotalString);
    const withdrawBalance = withdrawBlanceAmount - withdrawAmount;
    withdrawBlanceTotal.innerText = withdrawBalance;
})