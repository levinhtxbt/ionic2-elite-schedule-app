import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GamePage, MyTeamPage, TeamDetailPage, TournamentsPage, TeamsPage, TeamHomePage, StadingsPage } from './../pages/page';
import { EliteApiService } from './../shared/shared';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    GamePage,
    MyTeamPage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    TeamHomePage,
    StadingsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage,
    MyTeamPage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    TeamHomePage,
    StadingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    EliteApiService
  ]
})
export class AppModule { }
