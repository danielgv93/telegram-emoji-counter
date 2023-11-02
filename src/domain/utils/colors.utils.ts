import {ColorBars} from "../core/constants";

export const getBarColor = (index: number): string => {
    return ColorBars[index % ColorBars.length];

}
