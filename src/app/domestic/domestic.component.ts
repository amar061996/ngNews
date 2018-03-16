import { Component, OnInit,Input } from '@angular/core';
import {NewsService} from '../news.service';
import { News } from '../news';

@Component({
  selector: 'app-domestic',
  templateUrl: './domestic.component.html',
  styleUrls: ['./domestic.component.css'],
  providers:[NewsService]
})
export class DomesticComponent implements OnInit {

  @Input() domestic:News[];

  constructor(private __newsService:NewsService) { }

  ngOnInit() {
    
    
    if(this.domestic===undefined){
      this.getDomestic();
    }
    
  }
  getDomestic(){
    this.__newsService.getDomestic()
    .subscribe(news=>{  
      
      this.domestic=news;
      console.log(this.domestic);

    });

  }

}
