import { Component, OnInit } from '@angular/core';
import { WeeklyTrackChartModel } from '../../models/weekly-track-chart-model';
import { LastFMService } from '../../services/last-fmservice.service';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.scss']
})
export class TopSongsComponent implements OnInit {

  public tracks: WeeklyTrackChartModel;

  constructor(private lfm: LastFMService) { }

  ngOnInit() {
    this.getTop10();
  }

  private getTop10() {
    return this.lfm.getWeeklyChart()
      .subscribe(
        res => {
          res.track = res.track.slice(0, 10);
          this.tracks = res;
          // this.tracks.track.slice(0, 10);
          console.log(this.tracks);
        },
        err => console.log(err.message),
        () => console.log('done loading weeklytrackscharts...')
      );
  }

}
