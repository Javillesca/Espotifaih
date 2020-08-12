import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];

  constructor(  private spotify: SpotifyService) {
  }

  ngOnInit(): void {
    this.spotify.getNewReleases().subscribe( (resp: any) => {
      console.log(resp);
      this.newReleases = resp.albums.items;
    });
  }

}
