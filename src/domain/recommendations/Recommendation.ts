export interface Recommendation {
    type: "HEALTH_INSURANCE" | "HOME_CONTENT" | "PRIVATE_LIABILITY";
    price: {
        amount: number;
        periodicity: "MONTH" | "YEAR";
    }
}