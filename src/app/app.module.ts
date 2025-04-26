import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './pages/main/main.component';
import { TrendsComponent } from './pages/trends/trends.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { AgentComponent } from './pages/agent/agent.component';
import { ChartsComponent } from './charts/charts.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    MainComponent,
    TrendsComponent,
    TransactionComponent,
    BudgetComponent,
    AgentComponent,
    ChartsComponent,
  ],
  imports: [
    RouterOutlet,
    RouterLink,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
