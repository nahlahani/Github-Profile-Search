import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    public username = '';
    private client_id = '9c8162cb5911e7e291b2';
    private client_secret= '87684b678e8f794d6b0977b9a8e88cbf3d3240f4';
    constructor(private _http: Http) {
        console.log('Service Work!');
    }

    getUser() {
        return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)       
         .map(res => res.json());
    }

    getRepos() {
        return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    updateUsername(username: string) {
        this.username = username;
    }
}
