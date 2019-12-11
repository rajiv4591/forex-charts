import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HighstockComponent } from './components/highstock/highstock.component';

@NgModule({
  declarations: [
    AppComponent,
    HighstockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
