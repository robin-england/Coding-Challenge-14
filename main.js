// U63166005
// Coding Challenge #14

import { interestCalc } from "./interest_rate.js";          // Importing functions
import { loanPaymentCalc } from "./loan_payment.js"; 
import { investmentReturnCalc } from "./investment_return.js"; 

addEventListener("DOMContentLoaded", (event) => {           // Ensures DOM has loaded before we listen for buttons

    document.getElementById("interestCalc").addEventListener("click", () => {
        
        const principal = parseFloat(document.getElementById("principal").value)    // Takes values from inputs
        const rate = (parseFloat(document.getElementById("rate").value)/12)         // Converts annual percentage rate to monthly
        const time = parseFloat(document.getElementById("time").value)
        if (!principal || !rate || !time) {                     // Error Message and cancels function if there are blanks
            alert("Please fill out each field.")
            return 
        }
        const interestTotal = interestCalc(principal, rate, time)
        document.getElementById("interestResult").innerText = `Total Interest: $${interestTotal.toFixed(2)}`    // Displays in html
    })
    
    document.getElementById("loanCalc").addEventListener("click", () => {
        const principal = parseFloat(document.getElementById("principal").value)
        const rate = (parseFloat(document.getElementById("rate").value)/12)
        const n = parseFloat(document.getElementById("numberOfPeriods").value)
        if (!principal || !rate || !n) {                        // Error Message and cancels function if there are blanks
            alert("Please fill out each field.")
            return 
        }
        const loanTotal = loanPaymentCalc(principal, rate, n)
        document.getElementById("loanResult").innerText = `Monthly Loan Payments: $${loanTotal.toFixed(2)}`
    })
    
    document.getElementById("investCalc").addEventListener("click", () => {
        const principal = parseFloat(document.getElementById("principal").value)
        const rate = (parseFloat(document.getElementById("rate").value)/12)
        const time = parseFloat(document.getElementById("time").value)
        const n = parseFloat(document.getElementById("numberOfPeriods").value)
        if (!principal || !rate || !time || !n) {                      // Error Message and cancels function if there are blanks
            alert("Please fill out each field.")
            return 
        }
        const investmentTotal = investmentReturnCalc(principal, rate, time, n)
        document.getElementById("investmentResult").innerText = `Future Value of Investment: $${investmentTotal.toFixed(2)}`
    })

}); // dom loaded event close