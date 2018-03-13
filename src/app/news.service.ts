import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map' ;
import { Observable } from 'rxjs/Observable';

import { News } from './news';

@Injectable()
export class NewsService {

  private api_key:string='d3bce7c98ceb480782724ec57490d8ea';
  constructor(private _http:Http) { 
    console.log("News Service is working");
  }

  getNews():Observable<News[]>{
      return this._http.get('https://newsapi.org/v2/top-headlines?'+'country=in&' +'apiKey='+this.api_key)
      .map(res=>res.json().articles)
  }

}
