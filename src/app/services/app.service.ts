import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
@Injectable()
export class Appservice {
    constructor(private http: Http) { }
    getdata() {
        return this.http.get('app/resources/data.json').map(
                 (res) =>  res.json()
        );
    }

}