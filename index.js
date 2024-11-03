// You are given an array representing a series of transactions in a small business. 
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
    ["income", 1000],
    ["income", 1500],
    ["expense", 500],
    ["expense", 300],
    ["income", 700],
];


/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]
       const newArray = someArray.filter(function (arrayElement) {
  return CONDITION;
});
******************************************************************/

const incomeArray = transactions.filter(function(string){
    if(string[0] === "income" )
        return true
    else return false;
})

console.log(incomeArray);

/*****************************************************************
Part 1: Transaction Analysis

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

       const newArray = someArray.filter(function (arrayElement) {
  return CONDITION;
});
******************************************************************/

const expenseArray = transactions.filter(function(string){
    if(string[0]==="expense")
        return true
    else return false;
})

console.log(expenseArray);


/*****************************************************************
Part 2: Financial Summary
Task 3) Calculate the total income and return it.
       Output 3) 3200
******************************************************************/

// to calculate income we use reduce

const sumOfIncome = incomeArray.reduce(function(total,num){
    total = total +num[1]; // Num[1] neams second array form the first array in main array sumofincome (completated array)
    return total
},0)
console.log(sumOfIncome);


/*****************************************************************
Part 2: Financial Summary
Task 4) Calculate the total expenses and return it.
       Output 4) 800
******************************************************************/

const sumOfExpenses = expenseArray.reduce(function(total,num){
    total= total +num[1];
    return total;
},0)
console.log(sumOfExpenses);


/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400
******************************************************************/

const netTotal = sumOfIncome - sumOfExpenses;
console.log(netTotal);

/*****************************************************************
Part 3: Net Analysis
Task 6) Identify and create a new array with transactions (both incomes and expenses) above  or equal to $500.
       Output 6) [["income", 1000], ["income", 1500], ["expense", 500], ["income", 700]]

******************************************************************/

const aboveFive = transactions.filter(function(num){
    if(num[1] >= 500)
        return true
    else return false;
})

console.log(aboveFive);


// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.
