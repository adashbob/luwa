import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicAudioModule } from 'ionic-audio';

import { MyApp } from './app.component';
import { Page2 } from '../pages/page2/page2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GrammairePage } from "../pages/grammaire/grammaire";
import { LecturePage } from "../pages/lecture/lecture";
import { OrthographePage } from "../pages/orthographe/orthographe";
import { SonsPage } from "../pages/sons/sons";
import { VocabulairePage } from "../pages/vocabulaire/vocabulaire";
import {HomePage} from "../pages/home/home";
import {EntrainementPage} from "../pages/entrainement/entrainement";
import {NiveauPage} from "../pages/niveau/niveau";

import {AlBtnMenu} from "../components/alButtonMenu/al-btnMenu";
import {AlTopAside} from "../components/alTopAside/al-topAside";
import {AlHeader} from "../components/alHeader/al-header";
import {PerformancePage} from "../pages/performance/performance";
import {AlRecapQuestion} from "../components/alRecapQuestion/al-recapQuestion";
import {ReactiveFormsModule} from "@angular/forms";
import {AlChallange} from "../components/alChallange/al-challange";
import {AlTabPerformancee} from "../components/alTabPerformance/al-tabPerformance";

import {AlSounds} from "../services/al-sounds.service";
import { MediaPlugin } from '@ionic-native/media';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerformancePage,
    GrammairePage,
    LecturePage,
    OrthographePage,
    SonsPage,
    VocabulairePage,
    EntrainementPage,
    NiveauPage,
    Page2,

    // Gref component
    AlBtnMenu,
    AlTopAside,
    AlHeader,
    AlRecapQuestion,
    AlChallange,
    AlTabPerformancee
  ],
  imports: [
    IonicModule.forRoot(MyApp), ReactiveFormsModule,
    IonicAudioModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerformancePage,
    GrammairePage,
    LecturePage,
    OrthographePage,
    SonsPage,
    VocabulairePage,
    EntrainementPage,
    NiveauPage,
    Page2,

    // Gref component
    AlBtnMenu,
    AlTopAside,
    AlHeader,
    AlRecapQuestion,
    AlChallange,
    AlTabPerformancee
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AlSounds,
    MediaPlugin,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
