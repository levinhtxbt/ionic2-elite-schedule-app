import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamHomePage } from '../page';
import { EliteApiService } from '../../shared/shared';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teams = [];
  tourney: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApiService,
    private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.tourney = this.navParams.data;
    loader.present().then(() => {
      this.eliteApi
        .getTournamentData(this.tourney.id)
        .subscribe(res => {
          this.teams = res.teams;
          loader.dismiss();
        });
    });
  }

  goToTeamDetail($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }
}
