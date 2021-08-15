// handle deposit button event
document
    .getElementById('deposit-button')
    .addEventListener('click', function () {
        // get the amount of deposit
        const depositInput = document.getElementById('deposit-input');
        const depositAmount = parseFloat(depositInput.value);

        const depositTotal = document.getElementById('deposit-total');
        const depositTotalAmount = parseFloat(depositTotal.innerText);

        const newDepositTotalAmount = depositTotalAmount + depositAmount;

        // Update Deposite Total
        depositTotal.innerText = newDepositTotalAmount.toFixed(2);

        // Clear Deposit Input Field
        depositInput.value = '';

        // Update Account Balance
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalAmount = parseFloat(balanceTotal.innerText);

        const NewBalanceTotal = balanceTotalAmount + depositAmount;

        // Update Deposite Total
        balanceTotal.innerText = NewBalanceTotal.toFixed(2);
    });

// handle withdraw button event
document
    .getElementById('withdraw-button')
    .addEventListener('click', function () {
        // get the amount of withdraw
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmount = parseFloat(withdrawInput.value);

        const withdrawTotal = document.getElementById('withdraw-total');
        const withdrawTotalAmount = parseFloat(withdrawTotal.innerText);

        const newWithdrawTotalAmount = withdrawTotalAmount + withdrawAmount;

        // Update Withdraw Total
        withdrawTotal.innerText = newWithdrawTotalAmount.toFixed(2);

        // Clear Deposit Input Field
        withdrawInput.value = '';

        // Update Account Balance
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalAmount = parseFloat(balanceTotal.innerText);

        const NewBalanceTotal = balanceTotalAmount - withdrawAmount;

        // Update Deposite Total
        balanceTotal.innerText = NewBalanceTotal.toFixed(2);
    });
