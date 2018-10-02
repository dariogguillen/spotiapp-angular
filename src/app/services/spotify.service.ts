import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('spotify service works!!');
  }

  private getQuery (query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;
    return this.http.get(URL);
  }

  public getNewReleases () {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }

  public searchArtists (str: string) {
    return this.getQuery(`search?q=${str}&type=artist&limit=10`)
      .pipe(map(data => data['artists'].items));
  }
}
