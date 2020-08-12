import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service run');
   }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBTKFr7MTYblYd_Fcw_gZ16q9emgbQds0w96aiWfQDPJojXQ49qkaoT9YIl0JhYe-Iho200lYK9LQhw0ao',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
   }
}
