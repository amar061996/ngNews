import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/catch' ;
import 'rxjs/add/observable/throw' ;


import { News } from './news';

@Injectable()
export class NewsService {

  private api_key:string='d3bce7c98ceb480782724ec57490d8ea';
  constructor(private _http:Http) { 
    console.log("News Service is working");
  }

  getHeadlines():Observable<News[]>{
      return this._http.get('https://newsapi.org/v2/top-headlines?'+'country=in&' +'apiKey='+this.api_key)
      .map(res=>res.json().articles)
      .catch(this._errorHandler);
  }

  _errorHandler(error:Response){
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }

}
