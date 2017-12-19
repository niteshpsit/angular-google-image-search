import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
const headers = new Headers({ 'Content-Type': 'application/json' });
const options = new RequestOptions({ headers: headers });

@Injectable()
export class ImageService {
    constructor( private http: Http ) {}
    getAllWords(){
        let url = "http://localhost:3000/image/words";
        return this.http.get(url).toPromise()
    }
    getImage(search): any {
        let url = "http://localhost:3000/image?search="+search;
        return this.http.get(url).toPromise()
    }

    addImage(search): Promise<any> {
        let url = "http://localhost:3000/image?search="+search;
        return this.http.post(url, {}, options).toPromise()
    }
}