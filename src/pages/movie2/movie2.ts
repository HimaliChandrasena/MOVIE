import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ModalController} from 'ionic-angular';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the Movie2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie2',
  templateUrl: 'movie2.html',
})
export class Movie2Page {
	video: any = {
            url: 'https://www.youtube.com/embed/V-JaSjZMbSs',
        // url: 'https://www.youtube.com/watch?v=-2m7GleLsj0',
        title: 'Awesome video'

    };

trustedVideoUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams, private domSanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Movie2Page');
  }







  
  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
}    

         


}
