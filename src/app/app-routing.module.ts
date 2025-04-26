import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { routingGuardGuard } from './guard/routing-guard.guard';
import { MainComponent } from './pages/main/main.component';
import { TrendsComponent } from './pages/trends/trends.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { AgentComponent } from './pages/agent/agent.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component : HomeComponent

  },
  {
    path  : 'login',
    component : LoginComponent
  },
  {
     path : 'register',
     component  : RegistrationComponent
  },
  {
    path : 'dashboard',
    component : MainComponent,
    canActivate : [routingGuardGuard],
    children:[
      {
        path : '',
        redirectTo : 'trends',
        pathMatch : 'full'

      },
      {
        path : 'trends',
        component : TrendsComponent
      },
      {
        path : 'transaction',
        component : TransactionComponent,
      },
      {
        path : 'budget',
        component  : BudgetComponent,
      },
      {
        path : 'agent',
        component : AgentComponent,
      }
    ]
  },

  {
    path : '**',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
