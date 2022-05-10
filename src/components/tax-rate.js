const rateOfTax = 10;
const importedGoodsRate = 5;
const taxFree = ["book", "cd", "chocolate"];

function TaxCalculation(amount, imported, freeOfTax) {
    const tax = freeOfTax
        ? imported
            ? importedGoodsRate
            : 0
        : imported
            ? rateOfTax + importedGoodsRate
            : rateOfTax;
    return (amount * tax) / 100;
}
