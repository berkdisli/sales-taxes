const rateOfTax = 10;
const importedGoodsRate = 5;
const taxFree = ["book", "cd", "chocolate"];

export class TaxRate extends Component {

    TaxCalculation(value, imported, freeOfTax) {
        const tax = freeOfTax
            ? imported
                ? importedGoodsRate
                : 0
            : imported
                ? rateOfTax + importedGoodsRate
                : rateOfTax;
        return (value * tax) / 100;
    }

    NumberRound(tax) {
        let smallestInteger = Math.ceil(tax * 10) / 10;
        let integralPart = Math.trunc(tax * 100) % 10;

        return integralPart < 5 && integralPart != 0 ? smallestInteger - 0.05 : smallestInteger;
    }

    checkFreeOfTax(item) {
        return taxFree.some((i) => item.includes(i));
    }

}