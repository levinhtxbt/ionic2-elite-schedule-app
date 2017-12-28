import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EliteApiService {

  private baseUrl = 'https://scheduler-ic2.firebaseio.com/';
  private currentTourney : any = {};

  constructor(private http: Http) { }

  getTournaments() {

    return new Promise(resolve => {
      this.http
        .get(this.baseUrl + '/tournaments.json')
        .subscribe(res => resolve(res.json()));
    });

  }

  getTournamentData(tourneyId) {

    return this.http
      .get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
      .map((res: Response) => {

        this.currentTourney = res.json();
        return this.currentTourney;
      });
  }

  getCurrentTourney() {
    return this.currentTourney;
  }
}
