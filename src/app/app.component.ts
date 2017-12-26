import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from './currencies.service';
import { CurrencyData } from './interfaces/currencyData';
import { CURRENCIES } from './currencies.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    currencies = CURRENCIES;
    balances: any = {};
    constructor(private currenciesService: CurrenciesService) {}
    ngOnInit(): void {
        this.currencies.forEach((function(currencyData: CurrencyData): void {
            this.currenciesService.getBalance(currencyData)
                .subscribe(
                    data => {
                        currencyData.balance = currencyData.getBalance(data);
                    },
                    error => {
                        currencyData.balance = error;
                    }
                );
        }).bind(this));
    }
}
