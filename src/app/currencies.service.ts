import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CurrencyData } from './interfaces/currencyData';

@Injectable()
export class CurrenciesService {
    private url = 'https://api.smartbit.com.au/v1/blockchain/address';

    balance: any;
    errorMessage: any;
    constructor(private http: HttpClient) { }

    getBalance (currencyData: CurrencyData): Observable<any> {
        return this.http.get(currencyData.apiUrl.replace(':address', currencyData.address));
    }
}
