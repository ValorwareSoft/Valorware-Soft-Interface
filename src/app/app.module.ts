import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from "./modules/navbar/navbar.component";
import { FooterComponent } from "./modules/footer/footer.component";
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';

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
        BrowserAnimationsModule
    ]
})
export class AppModule { }
