import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
    constructor(private http: HttpClient) { }
    url = 'http://project2cirrus-env-2.diziubrss3.us-east-2.elasticbeanstalk.com';
    getData() {
        return this
            .http
            .get(`${this.url}/games`);
    }
}