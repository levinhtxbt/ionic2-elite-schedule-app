import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TournamentsPage } from '../page';
/**
 * Generated class for the MyTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-team',
  templateUrl: 'my-team.html',
})
export class MyTeamPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamPage');
  }

  navigateToTournament() {
    this.navCtrl.push(TournamentsPage);
  }
}
