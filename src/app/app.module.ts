import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicAudioModule } from 'ionic-audio';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {GrammairePage} from "../pages/grammaire/grammaire";
import {LecturePage} from "../pages/lecture/lecture";
import {OrthographePage} from "../pages/orthographe/orthographe";
import {SonsPage} from "../pages/sons/sons";
import {VocabulairePage} from "../pages/vocabulaire/vocabulaire";
import {HomePage} from "../pages/home/home";
import {EntrainementPage} from "../pages/entrainement/entrainement";
import {NiveauPage} from "../pages/niveau/niveau";

import {AlBtnMenu} from "../components/alButtonMenu/al-btnMenu";
import {AlTopAside} from "../components/alTopAside/al-topAside";
import {AlHeader} from "../components/alHeader/al-header";
import {AlRecapQuestion} from "../components/alRecapQuestion/al-recapQuestion";
import {ReactiveFormsModule} from "@angular/forms";
import {AlChallange} from "../components/alChallange/al-challange";

import {AlSounds} from "../services/al-sounds.service";
import {MediaPlugin } from '@ionic-native/media';
import {AlBtnNext} from "../components/alButtonNext/al-btnNext";
import {PalierPage} from "../pages/palier/palier";
import {AlTabPalier} from "../components/alTabPalier/al-tabPalier";
import {AlModel} from "../model/model.service";
import {SQLite} from "@ionic-native/sqlite";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PalierPage,
    GrammairePage,
    LecturePage,
    OrthographePage,
    SonsPage,
    VocabulairePage,
    EntrainementPage,
    NiveauPage,

    // Gref component
    AlBtnMenu,
    AlTopAside,
    AlHeader,
    AlRecapQuestion,
    AlChallange,
    AlTabPalier,
    AlBtnNext
  ],
  imports: [
    IonicModule.forRoot(MyApp), ReactiveFormsModule,
    IonicAudioModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PalierPage,
    GrammairePage,
    LecturePage,
    OrthographePage,
    SonsPage,
    VocabulairePage,
    EntrainementPage,
    NiveauPage,

    // Gref component
    AlBtnMenu,
    AlTopAside,
    AlHeader,
    AlRecapQuestion,
    AlChallange,
    AlTabPalier,
    AlBtnNext
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    AlModel,
    AlSounds,
    MediaPlugin,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
