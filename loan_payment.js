// U63166005
// Coding Challenge #14

// M = P[r(1+r)^n]/[(1+r)^n-1]

export function loanPaymentCalc(principal, rate, n) {   
    return (principal * [rate*(1+rate)**n]) / [(1+rate)**n -1]  
}