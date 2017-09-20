import { GithubService } from './shared/github.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  repos: any;
  username: string;

  constructor(public _githubService: GithubService) {
  }


  search() {
    this._githubService.updateUsername(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(user);
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
  });

  }

}
