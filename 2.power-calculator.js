const powerCalculator = (base, exponent) => {
    if (exponent <= 0) {
        return 'exponent should be >= 0'
    }
    if (exponent === 1) {
        return base
    }
    return base * powerCalculator(base, --exponent)
}
powerCalculator(10, 2);
powerCalculator(10, -2)