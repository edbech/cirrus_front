import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighscoresService {

  constructor(private http: HttpClient) { }
  url = 'http://project2cirrus-env-2.diziubrss3.us-east-2.elasticbeanstalk.com/';
  getData() {
    return this
      .http
      .get(`${this.url}/users/scores`)
  }
}
