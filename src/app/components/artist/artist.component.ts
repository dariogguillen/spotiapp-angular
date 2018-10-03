import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  loading = true;
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.activatedRoute.params.subscribe(params => {
      this.spotifyService.searchArtist(params.id)
        .subscribe(artist => {
          this.artist = artist;
          this.loading = false;
        });

      this.spotifyService.getTopTracks(params.id)
        .subscribe(topTracks => {
          this.topTracks = topTracks;
          console.log(this.topTracks);
        });
    });
  }

  ngOnInit() {
  }

}
