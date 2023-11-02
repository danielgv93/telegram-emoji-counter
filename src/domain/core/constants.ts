export const Api = {
    baseUrl: process.env.REACT_APP_BASEURL || "http://localhost:8080"
} as const;

export const ColorBars = [
    "#8884d8",
    "red",
    "orange",
    "#82ca9d"
] as const;

export const Months = [
    "ALL",
    "JANUARY",
    "FEBRUARY",
    "MARCH", "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER"
];