import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private spotify: SpotifyService) { }

  artists: any[] = [];
  loading: boolean;

  ngOnInit(): void {
  }

  searchArtist(searchValue: string) {
    this.loading = true;
    this.spotify.getArtist(searchValue)
        .subscribe((resp: any) => {
          this.artists = resp;

          this.loading = false;
        });
  }

}
