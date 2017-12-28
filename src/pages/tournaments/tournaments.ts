import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../page';
import { EliteApiService } from '../../shared/shared';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments: any;

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

    loader.present().then(() => {

      this.eliteApi
        .getTournaments()
        .then(res => {
          this.tournaments = res;
          loader.dismiss();
        });
    });

  }

  ionViewDidEnter() {
    console.log(this.tournaments);
  }

  goToTeam($event, item) {

    this.navCtrl.push(TeamsPage, item);
  }

}
