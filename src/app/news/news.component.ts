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
  private business:News[];
  private technology:News[];
  

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
    this.getBusiness();
    this.getTechnology();
  }

  getDomestic(){
    this.__newsService.getDomestic()
    .subscribe(news=>{  
      this.domestic=news.slice(0,4);
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

  getBusiness(){
    this.__newsService.getBusiness()
    .subscribe(news=>{ 
      this.business=news.slice(0,4);
      this.isBusinessAvailable=true;
    });
  }
  getTechnology(){
    this.__newsService.getTechnology()
    .subscribe(news=>{ 
      this.technology=news.slice(0,4);
      this.isTechnologyAvailable=true;
    });
  }

  

}
