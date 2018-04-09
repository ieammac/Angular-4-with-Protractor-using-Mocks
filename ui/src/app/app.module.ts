import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ItemListComponent} from './item-list/item-list';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {ItemListService} from './service/item-list.service';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppSettings} from './app.settings';
import {HomeComponent} from './home/home.component';

@NgModule({
    declarations: [
        HomeComponent,
        ItemListComponent,
        ItemDetailsComponent,
        NotFoundComponent,
        AppComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],

    // declaring here makes these singletons
    providers: [ItemListService, AppSettings,
        {provide: LocationStrategy, useClass: HashLocationStrategy}, ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
