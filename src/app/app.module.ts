import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from "./modules/navbar/navbar.component";
import { FooterComponent } from "./modules/footer/footer.component";
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarComponent,
        FooterComponent,
        NgxIntlTelInputModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            preventDuplicates: true,
            timeOut: 2000,
            maxOpened: 1
        }),
    ]
})
export class AppModule { }
