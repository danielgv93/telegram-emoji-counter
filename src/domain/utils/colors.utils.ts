import { ColorBars } from 'domain/core';

export const getBarColor = (index: number): string => {
	return ColorBars[index % ColorBars.length];
};
