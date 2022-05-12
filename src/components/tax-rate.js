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

    shoppingCarts(item, price, amount, imported) {
        let amount = Number(input.substring(0, input.indexOf(" ")));
        let imported = input.includes("import");
        let price = Number(input.substring(input.indexOf("at ") + 2).trim());
        let item = input.trim();

        if (amount === 0) {
            return `This "${item}" is not available in our store`
        } else {
            return {
                amount: amount,
                import: imported,
                item: item,
                price: price,
            };
        }
    }


}