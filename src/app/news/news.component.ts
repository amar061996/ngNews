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
  
  constructor(private __newsService:NewsService) {
   }

  ngOnInit() {
    this.getDomestic();
    this.getInternational();
    
    
  }

  getDomestic(){
    this.__newsService.getDomestic()
    .subscribe(news=>{  
      this.domestic=news;

    });
  }
  getInternational(){
    this.__newsService.getInternational()
    .subscribe(news=>{
      console.log(news);  
      this.international=news;
      console.log(this.international);
    });
  }
 


}
