export interface CurrencyData {
    symbol: string;
    address: string;
    apiUrl: string;
    balance: any;
    getBalance(data: any): number;
}
