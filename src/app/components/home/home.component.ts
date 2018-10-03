import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  albums: any[] = [];
  loading = true;
  errorMessage: string;
  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getNewReleases()
      .subscribe((data: any) => {
        this.albums = data;
        this.loading = false;
      }, error => {
        this.errorMessage = error.error.error.message;
      });
  }

  ngOnInit() {
  }

}
