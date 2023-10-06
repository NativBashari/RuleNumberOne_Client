import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { FundamentalsReportComponent } from '../components/fundamentals-report/fundamentals-report.component';
import { ProfitLossReportComponent } from '../components/fundamentals-report/fundamentals/profit-loss-report/profit-loss-report.component';
import { BalanceSheetReportComponent } from '../components/fundamentals-report/fundamentals/balance-sheet-report/balance-sheet-report.component';
import { CashFloeReportComponent } from '../components/fundamentals-report/fundamentals/cash-floe-report/cash-floe-report.component';
@NgModule({
  declarations: [
    AppComponent,
    FundamentalsReportComponent,
    ProfitLossReportComponent,
    BalanceSheetReportComponent,
    CashFloeReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
