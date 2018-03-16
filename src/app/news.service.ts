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

  getDomestic():Observable<News[]>{
      return this._http.get('https://newsapi.org/v2/top-headlines?'+'country=in&' +'apiKey='+this.api_key)
      .map(res=>res.json().articles)
      .catch(this._errorHandler);
  }

  getInternational():Observable<News[]>{
    return this._http.get('https://newsapi.org/v2/top-headlines?'+'sources=bbc-news,abc-news,al-jazeera-english,cnn&' +'apiKey='+this.api_key)
    .map(res=>res.json().articles)
    .catch(this._errorHandler);
}

getSports():Observable<News[]>{
  return this._http.get('https://newsapi.org/v2/top-headlines?'+'sources=bbc-sport,espn-cric-info,espn,football-italia,talksport,nfl-news,the-sport-bible&' +'apiKey='+this.api_key)
  .map(res=>res.json().articles)
  .catch(this._errorHandler);
}

getBusiness():Observable<News[]>{
  return this._http.get('https://newsapi.org/v2/top-headlines?'+'sources=australian-financial-review,info-money,bloomberg,business-insider,business-insider-uk,crypto-coins-news,financial-post,financial-times,fortune,the-economist,the-wall-street-journal&' +'apiKey='+this.api_key)
  .map(res=>res.json().articles)
  .catch(this._errorHandler);
}

getTechnology():Observable<News[]>{
  return this._http.get('https://newsapi.org/v2/top-headlines?'+'sources=hacker-news,mashable,techradar,techcrunch,techcrunch-cn,the-next-web,the-verge,ign&' +'apiKey='+this.api_key)
  .map(res=>res.json().articles)
  .catch(this._errorHandler);
}

  _errorHandler(error:Response){
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }

}
