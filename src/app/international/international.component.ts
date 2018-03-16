import { Component, OnInit,Input } from '@angular/core';
import {NewsService} from '../news.service';
import { News } from '../news';

@Component({
  selector: 'app-international',
  templateUrl: './international.component.html',
  styleUrls: ['./international.component.css'],
  providers:[NewsService]
})
export class InternationalComponent implements OnInit {

  @Input() international:News[];
  constructor(private __newsService:NewsService) { }

  ngOnInit() {
    if(this.international===undefined){
      this.getInternational();
    }
  }

  getInternational(){
    this.__newsService.getInternational()
    .subscribe(news=>{ 
      this.international=news;

    });
  }

}
