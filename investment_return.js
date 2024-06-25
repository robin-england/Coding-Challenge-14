// U63166005
// Coding Challenge #14

// A = P(1 + r/n)^(nt)

export function investmentReturnCalc(principal, rate, time, compoundPeriods) {
    return principal * (1 + rate / time ) ^ time
}