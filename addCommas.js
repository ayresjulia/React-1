function addCommas (num) {
	let numToStr = num.toString();
	let intNum;
	let decimals;
	numToStr.indexOf(".") === -1
		? (intNum = numToStr.slice(0, numToStr.length))
		: (intNum = numToStr.slice(0, numToStr.indexOf(".")));

	numToStr.indexOf(".") === -1
		? (decimals = "")
		: (decimals = numToStr.slice(numToStr.indexOf(".")));

	let reversedStr = intNum.split("").reverse().join("").toString();
	let addCommas = reversedStr.match(/.{1,3}/g).join(",");
	let result = addCommas.split("").reverse().join("");
	return result + decimals;
}

module.exports = addCommas;
