
// hendle deposit button
 document.getElementById('deposit-button').addEventListener('click',function(){
    //  get the amount deposited
    const depositInput=document.getElementById('deposit-input');
     const newDepositText=depositInput.value;
     const newDepositAmount= parseFloat(newDepositText);

    const depositTotal= document.getElementById('deposit-total');
    const prviousDepositText=depositTotal.innerText;
    const previousDepositAmount=parseFloat(prviousDepositText);
     const newDepositTotal=previousDepositAmount + newDepositAmount;
     depositTotal.innerText=newDepositTotal;
     depositInput.value='';

    //  clear the deposit input field

    // update account balence
    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const previousBalanceTotal= parseFloat(balanceTotalText);
    const newBalanceTotal= previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText=newBalanceTotal;
    depositInput.value='';
    
 });

//  withdraw evnt handler
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput=document.getElementById('withdraw-input');
    const withdrawAmountText=withdrawInput.value;
    const newWithdrawAmount=parseFloat(withdrawAmountText);

    
    // set withdraw total
    const withdrawTotal=document.getElementById('withdraw-total');
    const previousWithdrawText=withdrawTotal.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawText);
    const newWithdrawTotal=previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText=newWithdrawTotal;
// update balence
  const balanceTotal=document.getElementById('balance-total');
  const previousBalanceText= balanceTotal.innerText;
  const previousBalanceTotal=parseFloat(previousBalanceText);
  const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
  balanceTotal.innerText=newBalanceTotal;

// clear withdrawinput

    withdrawInput.value='';






})




