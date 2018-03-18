import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { DomesticComponent } from './domestic/domestic.component';
import { InternationalComponent } from './international/international.component';
import { SportsComponent } from './sports/sports.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { SearchComponent } from './search/search.component';


const appRoutes:Routes = [
  {path:'',component: NewsComponent },
  {path:'domestic',component: DomesticComponent},
  {path:'international',component: InternationalComponent},
  {path:'sports',component: SportsComponent},
  {path:'business',component: BusinessComponent},
  {path:'technology',component: TechnologyComponent},
  {path:'articles/:searchText',component: SearchComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    DomesticComponent,
    InternationalComponent,
    SportsComponent,
    BusinessComponent,
    TechnologyComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
