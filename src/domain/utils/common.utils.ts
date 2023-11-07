export const capitalize = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
export const toFixedIfDecimal = (
	num: number,
	fixed?: number
): string | number => {
	if (num % 1 !== 0) {
		return num.toFixed(fixed ?? 2);
	} else {
		return num;
	}
};
