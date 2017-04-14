import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import { MediaPlugin, MediaObject } from '@ionic-native/media';

@Injectable()
export class AlSounds{

  constructor(private media: MediaPlugin, private http: Http) { }

  playBtnSound(){

    const onStatusUpdate = (status) => console.log(status);

    this.media.create('assets/sons/OliverGOMA-Betty.mp3', onStatusUpdate)
      .then((file: MediaObject) => {

        // play the file
        file.play();

        // pause the file
        file.pause();

        // get current playback position
        file.getCurrentPosition().then((position) => {
          console.log(position);
        });

        // skip to 10 seconds (expects int value in ms)
        file.seekTo(10000);

        // stop playing the file
        file.stop();

        file.release();

      })
      .catch(e => console.log('Error opening media file', e));
  }
}