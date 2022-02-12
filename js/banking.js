
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
    
 })


