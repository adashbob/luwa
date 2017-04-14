import { Component } from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import { AudioProvider } from 'ionic-audio';


@Component({
  selector: 'page-sons',
  templateUrl: 'sons.html'
})

export class SonsPage {

  myTracks: any[];
  singleTrack: any;
  allTracks: any[];
  selectedTrack: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app : App, private _audioProvider: AudioProvider) {
    this.myTracks = [
      {
      src: 'assets/sons/OliverGOMA-Betty.mp3',
      artist: 'Olivier Ngoma',
      title: 'Betty',
      art: 'assets/img/49-01-01.png',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
    {
      src: 'assets/sons/notification.m4r',
      artist: 'Notification',
      title: 'Betty',
      art: 'assets/img/cheval-01.png',
      preload: 'metadata' 
    },
      {
        src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
        artist: 'John Mayer',
        title: 'Who Says',
        art: 'assets/img/anne-01-01.png',
        preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
      }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SonsPage');
  }

  ngAfterViewInit(){
    this.app._setDisableScroll(true);
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
  }

  playSelectedTrack() {
    // use AudioProvider to control selected track
    this._audioProvider.play(this.selectedTrack);
  }

  pauseSelectedTrack() {
    // use AudioProvider to control selected track
    this._audioProvider.pause(this.selectedTrack);
  }

}
