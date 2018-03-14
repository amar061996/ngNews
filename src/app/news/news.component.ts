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

  private topHeadlines:News[];

  constructor(private __newsService:NewsService) {
   }

  ngOnInit() {
    this.getNews();
    
  }

  getNews(){
    this.__newsService.getNews()
    .subscribe(news=>{
      console.log(news);  
      this.topHeadlines=news;
      console.log(this.topHeadlines);
    });
  }

}
