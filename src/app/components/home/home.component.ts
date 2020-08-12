import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading: boolean;
  constructor(  private spotify: SpotifyService) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.spotify.getNewReleases().subscribe( (resp: any) => {
      this.newReleases = resp;

      this.loading = false;
    });
  }

}
