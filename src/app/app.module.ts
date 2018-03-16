import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { DomesticComponent } from './domestic/domestic.component';
import { InternationalComponent } from './international/international.component';
import { SportsComponent } from './sports/sports.component';


const appRoutes:Routes = [
  {path:'',component: NewsComponent },
  {path:'domestic',component: DomesticComponent},
  {path:'international',component: InternationalComponent},
  {path:'sports',component: SportsComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    DomesticComponent,
    InternationalComponent,
    SportsComponent
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
