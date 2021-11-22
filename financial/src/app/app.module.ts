import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HistoryTransactionComponent } from './history-transaction/history-transaction.component';
import { GoalsComponent } from './goals/goals.component';
import { CardGoalsComponent } from './goals/card-goals/card-goals.component';
import { StatementComponent } from './statement/statement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransactionComponent,
    HistoryTransactionComponent,
    GoalsComponent,
    CardGoalsComponent,
    StatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
