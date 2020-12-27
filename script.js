// 1 pound = 1.4 US Dollars

const convertToUSD = (pound) => pound * 1.4;

// 1 pound = 5.7 BRL
const convertToBRL = (pound) => pound * 5.7 * 0.99;

console.log(convertToBRL(24));
console.log(convertToUSD(22));

const calcCurrency = (currency, amount) => {
	if (currency == 'USD') {
		return `
        1 pound = 1.4 US dollars
        Your ${amount} pounds equals to ${convertToUSD(amount)} US Dollars`;
	} else if (currency == 'BRL') {
		return `
        1 pound = 5.7 BR Real
        Your ${amount} pounds equals to ${convertToBRL(amount)} BR Reals`;
	} else {
		return `Enter valid currency or amount`;
	}
};

console.log(calcCurrency('USD', 250));
console.log(calcCurrency('BRL', 350));
console.log(calcCurrency('Usd', 200));
