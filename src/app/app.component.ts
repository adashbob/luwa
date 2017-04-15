import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GrammairePage } from "../pages/grammaire/grammaire";
import { LecturePage } from "../pages/lecture/lecture";
import { OrthographePage } from "../pages/orthographe/orthographe";
import { SonsPage } from "../pages/sons/sons";
import { VocabulairePage } from "../pages/vocabulaire/vocabulaire";
import { HomePage } from "../pages/home/home";
import { EntrainementPage } from "../pages/entrainement/entrainement";
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
      { title: 'Entrainnement',  component: EntrainementPage },
      { title: 'Grammaire', component: GrammairePage },
      { title: 'Lecture', component: LecturePage },
      { title: 'Orthographe', component: OrthographePage },
      { title: 'Sons', component: SonsPage },
      { title: 'Vocabulaire', component: VocabulairePage }
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
