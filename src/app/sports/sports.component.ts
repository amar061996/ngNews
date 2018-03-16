import { Component, OnInit, Input } from '@angular/core';
import {NewsService} from '../news.service';
import { News } from '../news';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
  providers:[NewsService]
})
export class SportsComponent implements OnInit {

  @Input() sports:News[];
  constructor(private __newsService:NewsService) { }

  ngOnInit() {

    if(this.sports===undefined){
      this.getSports();
  }

}

getSports(){
  this.__newsService.getSports()
  .subscribe(news=>{ 
    this.sports=news;
    
  });
}

}