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
  private sports:News[];
  private allNews:any;

  private isDomesticAvailable:boolean;
  private isInternationalAvailable:boolean;
  private isSportsAvailable:boolean;
  private isBusinessAvailable:boolean;
  private isTechnologyAvailable:boolean;

  constructor(private __newsService:NewsService) {
    this.isDomesticAvailable=false;
    this.isInternationalAvailable=false;
    this.isSportsAvailable=false;
    this.isBusinessAvailable=false;
    this.isTechnologyAvailable=false;
   }

  ngOnInit() {
    this.getDomestic();
    this.getInternational();
    this.getSports();
    
  }

  getDomestic(){
    this.__newsService.getDomestic()
    .subscribe(news=>{  
      this.domestic=news.slice(0,4);
      console.log(this.domestic)
      this.isDomesticAvailable=true
    });
  }

  getInternational(){
    this.__newsService.getInternational()
    .subscribe(news=>{ 
      this.international=news.slice(0,4);
      this.isInternationalAvailable=true;
    });
  }
 
  getSports(){
    this.__newsService.getSports()
    .subscribe(news=>{ 
      this.sports=news.slice(0,4);
      this.isSportsAvailable=true;
    });
  }


}
