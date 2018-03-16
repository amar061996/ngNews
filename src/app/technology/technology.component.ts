import { Component, OnInit, Input } from '@angular/core';
import {NewsService} from '../news.service';
import { News } from '../news';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
  providers:[NewsService]
})
export class TechnologyComponent implements OnInit {

  @Input() technology:News[];
  constructor(private __newsService:NewsService) { }

  ngOnInit() {

    if(this.technology===undefined){
      this.getTechnology();
    }
  }

  getTechnology(){
    this.__newsService.getTechnology()
    .subscribe(news=>{ 
      this.technology=news;
    
    });
  }

}
