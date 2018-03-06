import { NgModule } from '@angular/core';         // Si
import { CommonModule } from '@angular/common';   // Adicional
import { FormsModule } from '@angular/forms';     // Adicional
import { HttpModule } from '@angular/http';       // Adicional
import { RouterModule } from '@angular/router';   // Si
//import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'; //Si
import { HeaderComponent } from './components/shared/header/header.component'; 
import { HomeComponent } from './components/home/home.component';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AccountSummaryComponent } from './components/account/account-summary/account-summary.component';
import { AccountDetailComponent } from './components/account/account-detail/account-detail.component';
import { AccountActivityComponent } from './components/account/acccount-activity/account-activity.component';
import { AccountService } from './components/shared/account.service';
import { FormatAccountNumberPipe } from "./components/shared/format-account-number.pipe";

@NgModule({
    bootstrap: [ AppComponent ],  // <-- Este componente puede o no puede ir parece ser
    declarations: [
        AppComponent,
        AccountListComponent,
        AccountSummaryComponent,
        AccountDetailComponent,
        AccountActivityComponent,
        HomeComponent,
        HeaderComponent,
        FormatAccountNumberPipe
    ],
    imports: [
        //UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([

            { path: '', redirectTo: 'account', pathMatch: 'full' },
            { path: 'account', component: AccountListComponent },
            { path: 'detail/:id', component: AccountDetailComponent },
            { path: '**', redirectTo: 'account' }

        ])
    ],
    providers: [AccountService]
})
export class AppModuleShared {

       
       // import { NavMenuComponent } from './components/navmenu/navmenu.component';
       // import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
       // import { CounterComponent } from './components/counter/counter.component';
       // NavMenuComponent,
       // CounterComponent,
       // FetchDataComponent,
       // { path: '', redirectTo: 'home', pathMatch: 'full' },
       // { path: 'home', component: HomeComponent },
       // { path: '**', redirectTo: 'home' },
       // { path: 'counter', component: CounterComponent },
       // { path: 'fetch-data', component: FetchDataComponent },
}

