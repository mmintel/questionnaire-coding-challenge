export interface Recommendation {
    type: string;
    price: {
        amount: number;
        periodicity: string;
    }
}