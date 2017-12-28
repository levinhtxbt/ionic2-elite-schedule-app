import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApiService } from '../../shared/shared';
import { TeamHomePage } from '../page';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  game: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public eliteApi: EliteApiService) { }

  ionViewDidLoad() {
    this.game = this.navParams.data;
  }

  teamTapped(teamId) {
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.navCtrl.push(TeamHomePage, team);
  }

}
