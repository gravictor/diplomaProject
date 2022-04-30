import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/app-header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";

import {ReactiveFormsModule} from "@angular/forms";
import { PolygonInfoComponent } from './components/polygon-info/polygon-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PolygonInfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
