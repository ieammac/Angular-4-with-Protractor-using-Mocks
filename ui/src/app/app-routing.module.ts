import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {ItemListComponent} from './item-list/item-list';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'details/:number',
        component: ItemDetailsComponent
    },
    {
        path: 'list',
        component: ItemListComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
