import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import { News } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers:[NewsService]
})
export class NewsComponent implements OnInit {

  private domestic:News[];
  private international:News[];
  private allNews:any;
  private isDataAvailable:boolean;

  constructor(private __newsService:NewsService) {
    this.isDataAvailable=false;
   }

  ngOnInit() {
    this.getDomestic();
    this.getInternational();
    
    
  }

  getDomestic(){
    this.__newsService.getDomestic()
    .subscribe(news=>{  
      this.domestic=news.slice(0,4);
      console.log(this.domestic)
      this.isDataAvailable=true
    });
  }
  getInternational(){
    this.__newsService.getInternational()
    .subscribe(news=>{ 
      this.international=news.slice(0,4);

    });
  }
 


}
