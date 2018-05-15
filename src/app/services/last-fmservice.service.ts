import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, Subscription, Subscribable, SubscribableOrPromise } from "rxjs";
import { map, mapTo } from "rxjs/operators";
import { WeeklyTrackChartModel } from '../models/weekly-track-chart-model';

@Injectable({
  providedIn: 'root'
})
export class LastFMService {


  private api_key = 'f5b0562775e626fcfd9a28eda8151ec9';
  private secret = 'b9e483ddccc7251db2b9578dc0299dd5';
  // tslint:disable-next-line:max-line-length
  private apiUrl = 'https://ws.audioscrobbler.com/2.0/';
  private params: HttpParams;

  constructor(private http: HttpClient) {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const from = (new Date(year, month, 1, 12).getTime() / 1000).toString();


    this.params = new HttpParams({
      fromObject: {
        method: 'user.getweeklytrackchart',
        user: 'LoudSoftware',
        api_key: this.api_key,
        format: 'json',
        from: from,
        to: (date.getTime() / 1000).toString()
      }
    });
  }

  /**
   * getWeeklyChart
   */
  public getWeeklyChart(): Observable<WeeklyTrackChartModel> {
    return this.http.get<WeeklyTrackChartModel>(this.apiUrl, { params: this.params })
      .pipe(
        map(res => res['weeklytrackchart']),
      );
  }
}
