import { Component, OnInit, Input } from '@angular/core';
import {NewsService} from '../news.service';
import { News } from '../news';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
  providers:[NewsService]
})
export class BusinessComponent implements OnInit {

  @Input() business:News[];

  constructor(private __newsService:NewsService) { }

  ngOnInit() {
    if(this.business===undefined){
      this.getBusiness();
    }
  }
  getBusiness(){
    this.__newsService.getBusiness()
    .subscribe(news=>{ 
      this.business=news;
      
    });
  }

}
