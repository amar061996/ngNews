import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { DomesticComponent } from './domestic/domestic.component';


const appRoutes:Routes = [
  {path:'domestic',component: DomesticComponent},
  {path:'',component: NewsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    DomesticComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
