const nthTriangular = (n) => {
    if (n <= 1) {
        return n
    } else {
        return n + nthTriangular(n - 1)
    }
}
nthTriangular(6)