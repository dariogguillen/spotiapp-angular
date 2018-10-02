import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artists: any[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchArtists (str: string) {
    this.spotifyService.searchArtists(str)
      .subscribe((data: any) => {
        this.artists = data;
        console.log(this.artists);
      });
  }

}
