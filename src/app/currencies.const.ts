import { CurrencyData } from './interfaces/currencyData';

export const CURRENCIES: CurrencyData[] = [
    {
        symbol: 'btc',
        address: '1923qxU74HWWz75LgWTsPE4FT9Zyd6n6bv',
        balance: undefined,
        apiUrl: 'https://api.smartbit.com.au/v1/blockchain/address/:address',
        getBalance: (data): number => {
            return (((data || {}).address || {}).total || {}).balance;
        }
    },
    {
        symbol: 'ltc',
        address: 'Ld5NnqvjiaL5et5z4RGzFgo5bqKYiJXS6o',
        balance: undefined,
        apiUrl: 'https://chain.so/api/v2/get_address_balance/LTC/:address',
        getBalance: (data): number => {
            return ((data || {}).data || {}).confirmed_balance;
        }
    },
    {
        symbol: 'doge',
        address: 'DT1YZYVecn9kBy8vb7yTpozeMxRfQvB8eY',
        balance: undefined,
        apiUrl: 'http://dogechain.info/api/v1/address/balance/:address',
        getBalance: (data): number => {
            return (data || {}).balance;
        }
    },
    {
        symbol: 'eth',
        address: '0xb794f5ea0ba39494ce839613fffba74279579268',
        balance: undefined,
        apiUrl: 'https://api.ethplorer.io/getAddressInfo/:address?apiKey=freekey',
        getBalance: (data): number => {
            return ((data || {}).ETH || {}).balance;
        }
    },
    {
        symbol: 'xrp',
        address: 'rSBybLprUxV6AKTrwhcuGmgrYHVmRfk6f',
        balance: undefined,
        apiUrl: 'https://data.ripple.com/v2/accounts/:address/balances',
        getBalance: (data): number => {
            return (((data || {}).balances || {})[0] || {}).value;
        }
    },
    {
        symbol: 'xcp',
        address: '13dGQEgXoX3AqwTHCdhJhV1wh5TWLkPGmr',
        balance: undefined,
        apiUrl: 'https://xchain.io/api/address/:address',
        getBalance: (data): number => {
            return (data || {}).xcp_balance;
        }
    },
    {
        symbol: 'rdd',
        address: 'RjQU231zo5uXniHBHahFnhB7vzvQHaQ8sC',
        balance: undefined,
        apiUrl: 'http://live.reddcoin.com/api/addr/:address/balance',
        getBalance: (data): number => {
            return data / 100000000;
        }
    },
    {
        symbol: 'dash',
        address: 'XxsTca1ATYAuZdCo6E8ePQQovGG5bvayeN',
        balance: undefined,
        apiUrl: 'https://explorer.dash.org/chain/Dash/q/addressbalance/:address',
        getBalance: (data): number => {
            return data;
        }
    }
];
