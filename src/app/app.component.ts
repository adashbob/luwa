import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SonsPage } from "../pages/sons/sons";
import { HomePage } from "../pages/home/home";
import {PalierPage} from "../pages/palier/palier";
import {AlModel} from "../model/model.service";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private model : AlModel) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Palier',  component: PalierPage },
      { title: 'Feedback', component: SonsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // this.model.createAluwaModel();
    });
  }

  /**
   * Met la page sur le sommet de la pile de navigation
   * @param page
   */
  navPage(page) {
    this.nav.setRoot(page.component);
  }
}
