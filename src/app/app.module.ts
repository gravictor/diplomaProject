import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/app-header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { ContentComponent } from './components/content/content.component';
import {MatTabsModule} from "@angular/material/tabs";
import { MapComponent } from './components/content/components/map/map.component';
import { MainInfoComponent } from './components/content/components/main-info/main-info.component';
import {AgmCoreModule} from "@agm/core";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    MapComponent,
    MainInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCI97YoHaUedCufy1KTPMjRdtt-TZejU8s',
      language: "en",
      libraries: ['places', 'geometry']
    }),
    MatButtonModule,
    MatTabsModule,
    AgmCoreModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
