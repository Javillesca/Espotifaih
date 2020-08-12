import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service run');
   }

    getQuery( query: string): any {
      const headers = new HttpHeaders({
        Authorization: 'Bearer BQD7OPjqhrR9aeN3oFf__XtNS323dPpxbkDTGhFFtnq-FGVhdA6d5XJKbjcrb2bon27t97EZ4e14bLs9xOU',
      });

      const url = `https://api.spotify.com/v1/${ query }`;

      return this.http.get(url, { headers });


   }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases').pipe( map( resp => resp['albums'].items ));
   }

   getArtist(searchValue: string): any {
     return this.getQuery(`search?q=${ searchValue }&type=artist`).pipe( map( resp =>  resp['artists'].items ));
    }// api.spotify.com/v1/search

}
