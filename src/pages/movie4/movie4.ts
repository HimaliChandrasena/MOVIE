import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ModalController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the Movie4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie4',
  templateUrl: 'movie4.html',
})
export class Movie4Page {

		video: any = {
            url: 'https://www.youtube.com/embed/X_5_BLt76c0',
        title: 'Awesome video'

    };

trustedVideoUrl: SafeResourceUrl;


  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams, private domSanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Movie4Page');
  }
    ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
}    


}
