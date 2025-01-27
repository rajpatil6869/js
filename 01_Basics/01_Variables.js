const accountId=123456789
let accountEmail = "raj123@gmail.com"
var accountPswd= "123654"
accontCity = "Jaipur"
let accountState;
/*
    prefer do not use var
    because of issue in block scope and function scope
*/

// accountId = 23 // not alloud
accountEmail = "rp123@gmail.com"
accountPswd = "325896"
accontCity="kolhapur"
console.log(accountId);
console.table([accountId,accountEmail,accountPswd,accontCity,accountState]);
