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
      Authorization: 'Bearer BQC7Sj5OMaH8SwkFYWxb4kD3GsEfc6yAluJazttEZfIHFnlVVuk8YyOuDF9m5pwMZeakqqQanAvqnaqu20Q',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
   }

   getArtist(searchValue: string) {
     const headers = new HttpHeaders({
       Authorization: 'Bearer BQC7Sj5OMaH8SwkFYWxb4kD3GsEfc6yAluJazttEZfIHFnlVVuk8YyOuDF9m5pwMZeakqqQanAvqnaqu20Q',
      });
     return this.http.get(`https://api.spotify.com/v1/search?q=${ searchValue }&type=artist`, { headers });
    }// api.spotify.com/v1/search

}
